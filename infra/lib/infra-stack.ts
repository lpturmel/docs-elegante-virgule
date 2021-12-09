import * as codepipeline from "@aws-cdk/aws-codepipeline";
import { Stack, StackProps, Construct, SecretValue } from "@aws-cdk/core";
import * as s3Deploy from "@aws-cdk/aws-s3-deployment";
import * as codebuild from "@aws-cdk/aws-codebuild";
import * as cpactions from "@aws-cdk/aws-codepipeline-actions";
import { Bucket, BucketAccessControl } from "@aws-cdk/aws-s3";

interface CustomStackProps extends StackProps {
    local: boolean;
}
export class InfraStack extends Stack {
    constructor(scope: Construct, id: string, props?: CustomStackProps) {
        super(scope, id, props);

        const PIPELINE_NAME = "elegante-virgule-pipeline";
        const S3_BUCKET_NAME = "elegantevirgule-test";

        const targetBucket = Bucket.fromBucketName(
            this,
            "TargetBucket",
            S3_BUCKET_NAME
        );
        if (props!.local) {
            // add the BucketDeployment part...
            const source = s3Deploy.Source.asset("../frontend/out");
            new s3Deploy.BucketDeployment(this, "BucketDeployment", {
                sources: [source],
                destinationBucket: targetBucket,
                accessControl: BucketAccessControl.PUBLIC_READ,
            });
        } else {
            const sourceOutput = new codepipeline.Artifact();
            const frontendBuildOutput = new codepipeline.Artifact();
            new codepipeline.Pipeline(this, "Pipeline", {
                pipelineName: PIPELINE_NAME,
                stages: [
                    {
                        stageName: "Source",
                        actions: [
                            // add your source from Git here...
                            new cpactions.GitHubSourceAction({
                                actionName: "Source",
                                oauthToken:
                                    SecretValue.secretsManager(
                                        "ev-github-token"
                                    ),
                                branch: "master",
                                repo: "docs-elegante-virgule",
                                owner: "lpturmel",
                                output: sourceOutput,
                            }),
                        ],
                    },
                    {
                        stageName: "Build",
                        actions: [
                            new cpactions.CodeBuildAction({
                                actionName: "Build_Frontend",
                                input: sourceOutput,
                                project: new codebuild.PipelineProject(
                                    this,
                                    "NextBuildExport",
                                    {
                                        environment: {
                                            buildImage:
                                                codebuild.LinuxBuildImage.fromCodeBuildImageId(
                                                    "aws/codebuild/standard:5.0"
                                                ),
                                        },
                                        buildSpec:
                                            codebuild.BuildSpec.fromObject({
                                                version: "0.2",

                                                phases: {
                                                    install: {
                                                        "runtime-versions": {
                                                            nodejs: "14",
                                                        },
                                                        commands: [
                                                            "cd frontend",
                                                            "npm install",
                                                        ],
                                                    },
                                                    build: {
                                                        commands: [
                                                            "npm run build", // or whatever other process you use for the SPA build...
                                                            "npm run export",
                                                        ],
                                                    },
                                                },
                                                artifacts: {
                                                    "base-directory":
                                                        "frontend/out",
                                                    files: "**/*",
                                                },
                                            }),
                                    }
                                ),
                                outputs: [frontendBuildOutput],
                            }),
                        ],
                    },
                    {
                        stageName: "Deploy",
                        actions: [
                            new cpactions.S3DeployAction({
                                actionName: "S3_Deploy",
                                bucket: targetBucket,
                                input: frontendBuildOutput,
                                runOrder: 2,
                                accessControl: BucketAccessControl.PUBLIC_READ,
                            }),
                        ],
                    },
                ],
            });
        }
    }
}
