import { FunctionComponent } from "react";
import AccordeonSection from "../AccordeonSection";
import AccordeonItem from "../AccordeonItem";
import { FiPackage } from "react-icons/fi";

const Shipping: FunctionComponent = () => {
    return (
        <>
            <AccordeonSection
                title="Shipping"
                icon={<FiPackage className="w-6 h-6" />}
            >
                <AccordeonItem question="How long does it take before you ship my order?">
                    Our normal delay to prepare your order is 3 to 5 business
                    days. But since a few months (due to covid pandemic), we get
                    very high volumes of orders. So our delay is now extended to
                    6 to 8 business days to ship.
                </AccordeonItem>
                <AccordeonItem question="Which carriers are you using to ship?">
                    Most Canadian orders are shipped with Canada Post. For US
                    and international, we work with{" "}
                    <a
                        href="https://chitchats.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Chit Chats{" "}
                    </a>{" "}
                    who partners with USPS for the USA and Asendia for
                    International destinations.
                </AccordeonItem>
                <AccordeonItem question="I have an emergency, so I need my order quickly. What are my options?">
                    You can upgrade your shipping option at checkout before
                    paying, As our Flat rate is the most economical option,
                    regular mail, untracked and uninsured usually. If you
                    already checked out and paid your order,{" "}
                    <a
                        href="https://shop.elegantevirgule.com/contact-us/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        please contact us as soon as possible{" "}
                    </a>{" "}
                    with your order number and we will try to help.
                </AccordeonItem>
                <AccordeonItem question="Is your packaging ecofriendly?">
                    Yes we are proud of the way we ship. We exclusively use 100%
                    recyclable or 100% compostable supply. Usually from 100%
                    recycled material. Read more on our{" "}
                    <a
                        href="https://shop.elegantevirgule.com/shipping-returns-packaging/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Shipping page.{" "}
                    </a>
                </AccordeonItem>
                <AccordeonItem question="Once shipped, how long does it take before I get my package?">
                    <p>
                        {" "}
                        The transit time varies a lot but typically delays are
                        as following :{" "}
                    </p>
                    <br />
                    <ul>
                        <li>
                            * For Quebec and Ontario, the packages arrive
                            usually within 2-3 days after you get our shipping
                            notification.
                        </li>
                        <li> * For the rest of Canada, 7 to 10 days. </li>
                        <li> * For the USA, 4 to 10 days.</li>
                        <li>
                            {" "}
                            * For the rest of the World, from 10 days to a
                            month.{" "}
                        </li>
                        <br />
                        <li>
                            {" "}
                            IMPORTANT: These delays are for the Flat rate and
                            Free shipping options. You can upgrade your shipping
                            at checkout, to Expedited, Express or even Overnight
                            shipping for Ontario and Quebec.{" "}
                        </li>
                    </ul>
                </AccordeonItem>
            </AccordeonSection>
        </>
    );
};
export default Shipping;
