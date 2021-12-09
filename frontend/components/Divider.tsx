import { FunctionComponent } from "react";

export interface DividerProps {}

const Divider: FunctionComponent<DividerProps> = () => {
    return <hr className="w-full height-[1px] text-border-accent" />;
};
export default Divider;
