import { FunctionComponent } from "react";
import AccordeonSection from "../AccordeonSection";
import AccordeonItem from "../AccordeonItem";
import { FiLifeBuoy } from "react-icons/fi";
import Divider from "../Divider";

const Support: FunctionComponent = () => {
    return (
        <>
            <AccordeonSection
                title="Support"
                icon={<FiLifeBuoy className="w-6 h-6" />}
            >
                <AccordeonItem question="Do you offer support if I need help?">
                    Yes! High-quality customer support is extremely important
                    for a quality service and product, that’s why we do our best
                    to resolve any issues you may encounter while using our
                    website.
                </AccordeonItem>
                <Divider />
                <AccordeonItem question="How can I get any help?">
                    <p>
                        We value our clients and you can always feel free to
                        contact us for your order or with any concern :
                    </p>
                    <br />
                    <ul>
                        <li>
                            {" "}
                            * Contact us using the website form{" "}
                            <a
                                href="https://shop.elegantevirgule.com/contact-us/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                here{" "}
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            * Send us an email at info(at)elegantevirgule.com{" "}
                        </li>
                        <li>
                            {" "}
                            * Leave us a direct message on instagram{" "}
                            <a
                                href="https://www.instagram.com/elegantevirgule/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                @elegantevirgule{" "}
                            </a>{" "}
                        </li>
                    </ul>
                </AccordeonItem>
                <Divider />
                <AccordeonItem question="I already placed an order but I would like to make changes">
                    No problem. Please contact us as soon as possible with your
                    order number (see previous question)
                </AccordeonItem>
                <Divider />
                <AccordeonItem question="I haven't found the responses to my question in the FAQ section">
                    Please{" "}
                    <a
                        href="https://shop.elegantevirgule.com/contact-us/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        contact us !{" "}
                    </a>
                </AccordeonItem>
            </AccordeonSection>
        </>
    );
};
export default Support;
