#!/usr/bin/env node
import * as cdk from "@aws-cdk/core";
import { InfraStack } from "../lib/infra-stack";

const app = new cdk.App();
new InfraStack(app, "LocalStack", {
    env: { account: "028071413917", region: "us-east-1" },
    local: true,
});

new InfraStack(app, "InfraStack", {
    env: { account: "028071413917", region: "us-east-1" },
    local: false,
});
app.synth();
