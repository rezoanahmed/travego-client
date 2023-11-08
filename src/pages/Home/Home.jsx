import Destinations from "../../components/Destinations/Destinations";
import Devices from "../../components/Devices/Devices";
import Faq from "../../components/Faq/Faq";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Reviews from "../../components/Reviews/Reviews";
import Why from "../../components/Why/Why";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="dark:bg-[#1f2937] dark:text-[#949ea9]">
            <Hero></Hero>
            <div className="p-4 md:p-8 mx-auto">
                <Services></Services>
                <Why></Why>
                <Destinations></Destinations>
                <Reviews></Reviews>
                <Features></Features>
                <Devices></Devices>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;