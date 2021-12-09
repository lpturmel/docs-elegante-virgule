import { FunctionComponent } from "react";
import AccordeonSection from "../AccordeonSection";
import AccordeonItem from "../AccordeonItem";
import { FiAlertOctagon } from "react-icons/fi";
import Divider from "../Divider";

const Returns: FunctionComponent = () => {
    return (
        <>
            <AccordeonSection
                title="Return Policy, Cancellations"
                icon={<FiAlertOctagon className="w-6 h-6" />}
            >
                <AccordeonItem question="I am not happy with my purchase, can I return it?">
                    All Fabric purchase is final. Please note our returns policy
                    on all other items. If for any reason you are not thrilled
                    with your purchase you are welcome to return your purchase
                    (other than fabric or kits) to us and we will send a refund
                    for the original cost paid less a 25% re-stocking fee upon
                    its return. The restocking fee is necessary to cover the
                    cost of the return: processing your order, receiving and
                    processing your return, adding return to inventory.
                </AccordeonItem>
                <Divider />
                <AccordeonItem question="I changed my mind, can I cancel my order or my preorder?">
                    Unfortunately we cannot offer cancellations on pre-orders as
                    we place orders from the manufacturers based on pre-order
                    sales. As for the regular fabric orders, we try to take care
                    and cut the fabric as soon as possible when we get the
                    orders so we cannot cancel orders either. Please contact us.
                </AccordeonItem>
                <Divider />
                <AccordeonItem question="Can I add Pre-order items to my regular order?">
                    If you order Pre-order items with in stock items, all items
                    will be held and shipped together, please order separately
                    if you would like in stock items shipped immediately.
                </AccordeonItem>
            </AccordeonSection>
        </>
    );
};
export default Returns;
