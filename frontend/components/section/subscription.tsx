import { FunctionComponent } from "react";
import AccordeonSection from "../AccordeonSection";
import AccordeonItem from "../AccordeonItem";
import { FiClock } from "react-icons/fi";

export interface SubscriptionProps {}

const Subscription: FunctionComponent<SubscriptionProps> = () => {
    return (
        <>
            <AccordeonSection
                title="Subscription (FABRIC CLUB)"
                icon={<FiClock className="w-6 h-6" />}
            >
                <AccordeonItem question="What kind of subscriptions are available?">
                    We currently offer subscriptions for LIBERTY Fabrics and
                    RIFLE PAPER CO products. But in the near future, there will
                    be subscriptions for TILDA and MADRAS Fabrics.
                </AccordeonItem>
                <AccordeonItem question="When do you ship the monthly packages?">
                    Due to the large number of subscribers, the shipping of the
                    packages takes several days : For the LIBERTY Rainbow Club,
                    we ship between the 15th and the 30th each month. For the
                    RIFLE PAPER CO Club, we ship between the 10th and the 30th
                    each month.
                </AccordeonItem>
                <AccordeonItem question="Can I cancel my subscription at anytime?">
                    Sure. Your subscription can be cancelled anytime by updating
                    it on the Customer Portal. Your cancelation will take effect
                    at the end of current billing period. For example if you
                    have a LIBERTY Rainbow subscription for which the payment
                    occurs on the 10th each month. If you cancel your
                    subscription before the 10th, you will not be billed on the
                    next billing period. But if you cancel after the 10th (let's
                    say the 15th), since you have already been billed, you will
                    receive your month package for the last time. And you will
                    not be billed for the next billing period,
                </AccordeonItem>
                <AccordeonItem question="I am a new customer, Can I subscribe anytime?">
                    No. The subscription period is limited for only a few days
                    when we open it, as places are limited for each plan. You
                    can leave your name{" "}
                    <a
                        href="https://mailchi.mp/d87f6d6a56a2/liberty-rainbow-club"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        HERE{" "}
                    </a>{" "}
                    to get notified as soon as the subscription is available
                    again.
                </AccordeonItem>
                <AccordeonItem question="Do I have to create another account to subscribe?">
                    Yes. The database for the subscriptions is not the same as
                    the shop main customer database. You will need to create an
                    account through the Customer subscription Portal once the
                    subscription period is active.
                </AccordeonItem>
                <AccordeonItem question="Can I change my plan later on?">
                    Absolutely! You can cancel your current plan and choose
                    another one (bigger or smaller plan). The change will take
                    effect at the end of current billing period. The link to
                    access the Customer Portal is in the email you received when
                    you first subscribed.
                </AccordeonItem>
                <AccordeonItem question="Will you renew my subscription automatically?">
                    Yes, your subscription will be automatically renewed
                    according to your pay period.
                </AccordeonItem>
                <AccordeonItem question="Do you offer any discounts?">
                    Yes! We occasionally offer discounts. Please subscribe to
                    our newsletter or follow us on instagram to get updates
                    about our discounts and coupons.
                </AccordeonItem>
                <AccordeonItem question="Can I request a refund?">
                    No. But you can cancel your subscription to stop payments.
                </AccordeonItem>
                <AccordeonItem question="Where can I leave my email in order to be notified once the subscriptions are open?">
                    You can leave your name{" "}
                    <a
                        href="https://mailchi.mp/d87f6d6a56a2/liberty-rainbow-club"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        HERE{" "}
                    </a>{" "}
                    to get notified as soon as the subscription is available
                    again.
                </AccordeonItem>
            </AccordeonSection>
        </>
    );
};
export default Subscription;
