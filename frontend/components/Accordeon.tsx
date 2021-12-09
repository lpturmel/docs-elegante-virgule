import { FunctionComponent } from "react";
import Preorders from "./section/preorders";
import Returns from "./section/returns";
import Shipping from "./section/shipping";
import Subscription from "./section/subscription";
import Support from "./section/support";

export interface AccordeonProps {}

const Accordeon: FunctionComponent<AccordeonProps> = () => {
    return (
        <div className="flex flex-col space-y-8">
            <Subscription />
            <Preorders />
            <Shipping />
            <Returns />
            <Support />
        </div>
    );
};
export default Accordeon;
