import {BiSupport, BiSolidCustomize, BiDollar} from "react-icons/bi"
import {VscFeedback} from "react-icons/vsc"

const Features = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className="flex justify-center items-center flex-col gap-2">
                    <BiSupport className="text-6xl text-travego dark:text-blue-600"></BiSupport>
                    <h1 className="text-2xl font-bold">24/7 Customer Support</h1>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <BiSolidCustomize className="text-6xl text-travego dark:text-blue-600"></BiSolidCustomize>
                    <h1 className="text-2xl font-bold">Personalized Services</h1>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <BiDollar className="text-6xl text-travego dark:text-blue-600"></BiDollar>
                    <h1 className="text-2xl font-bold">Transparent Pricing</h1>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <VscFeedback className="text-6xl text-travego dark:text-blue-600"></VscFeedback>
                    <h1 className="text-2xl font-bold">Feedback and Improvement</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;