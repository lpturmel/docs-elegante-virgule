import type { NextPage } from "next";
import Accordeon from "../components/Accordeon";
import Divider from "../components/Divider";

const Home: NextPage = () => {
    return (
        <div className="test p-8">
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Accordeon />
        </div>
    );
};

export default Home;
