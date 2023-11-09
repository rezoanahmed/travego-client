import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
        <Helmet>
            <title>Travego | About</title>
        </Helmet>
        <div className="pb-48 dark:bg-[#1f2937] dark:text-[#949ea9]">
            <section className="pt-8 p-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-travego2">About Us</h2>
            <p className="mt-4 leading-relaxed">
                Welcome to <span className="text-travego2 dark:text-blue-500">TraveGo</span> - your ultimate travel buddy. You Can Book and Provide Your Services related to Tour and Guides Here. 
            </p>
            <p className="mt-4 leading-relaxed">
                At <span className="text-travego2 dark:text-blue-500">Cars Palace</span>, we prioritize customer satisfaction, offering top-notch services.
            </p>
            <p className="mt-4 leading-relaxed">
                Want a travel partner? <span className="text-travego2 dark:text-blue-500">TraveGo</span> will assist you
            </p>
        </section>
        </div>
        </>
    );
};

export default About;
