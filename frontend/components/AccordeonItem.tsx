import { FunctionComponent, useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";

export interface AccordeonItemProps {
    question: string;
}

const AccordeonItem: FunctionComponent<AccordeonItemProps> = ({
    question,
    children,
}) => {
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const renderBgColor = () => {
        return open ? "white" : "bg-main-accent";
    };

    const renderRotation = () => {
        return open ? "rotate-45" : "";
    };

    const renderIconColor = () => {
        return hover ? "text-black" : "text-gray-300";
    };
    const handleExpand = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const newHeight = document.getElementById("__next")?.offsetHeight;
        console.log("Sending new height: ", newHeight);
        parent.postMessage(newHeight, "*");
    }, [open]);
    return (
        <details
            className={`${renderBgColor()} transition-colors duration-200 vstack justify-start items-center border-border-accent border-b-[1px]`}
        >
            <summary
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="cursor-pointer"
                onClick={handleExpand}
            >
                <div className="flex flex-row justify-between p-[24px] select-none">
                    <p className="font-semibold text-[19px]">{question}</p>
                    <IoAdd
                        className={`min-w-[32px] min-h-[32px] transition duration-300 ${renderRotation()} ${renderIconColor()}`}
                    />
                </div>
            </summary>
            <div className="text-title px-[24px] pb-[24px]">{children}</div>
        </details>
    );
};
export default AccordeonItem;
