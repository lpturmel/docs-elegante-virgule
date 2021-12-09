import { FunctionComponent, ReactElement } from "react";

export interface AccordeonSectionProps {
    title: string;
    icon: ReactElement;
}

const AccordeonSection: FunctionComponent<AccordeonSectionProps> = ({
    icon,
    title,
    children,
}) => {
    return (
        <div className="flex flex-col space-y-8">
            <div className="flex flex-row space-x-4 items-center text-title">
                {icon}
                <p className="font-semibold text-2xl">{title}</p>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border-r-[1px] border-l-[1px] border-t-[1px] border-border-accent">
                {children}
            </div>
        </div>
    );
};
export default AccordeonSection;
