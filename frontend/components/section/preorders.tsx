import { FunctionComponent } from "react";
import AccordeonSection from "../AccordeonSection";
import AccordeonItem from "../AccordeonItem";
import { FiCalendar } from "react-icons/fi";
import Divider from "../Divider";

const Preorders: FunctionComponent = () => {
    return (
        <>
            <AccordeonSection
                title="Pre-orders"
                icon={<FiCalendar className="w-6 h-6" />}
            >
                <AccordeonItem question="How does the Pre-order work?">
                    Pre-orders are set for upcoming collections with a release
                    date announced by the manufacturer. We take full payment up
                    front for pre-orders and will ship as soon as we receive the
                    goods.
                </AccordeonItem>
                <Divider />
                <AccordeonItem question="Can I cancel my preorder?">
                    Unfortunately we cannot offer cancellations on pre-orders as
                    we place orders from the manufacturers based on pre-order
                    sales.
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
export default Preorders;
