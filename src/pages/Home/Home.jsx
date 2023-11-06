import Destinations from "../../components/Destinations/Destinations";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Reviews from "../../components/Reviews/Reviews";
import Why from "../../components/Why/Why";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="p-4 md:p-8 mx-auto">
                <Services></Services>
                <Why></Why>
                <Destinations></Destinations>
                <Reviews></Reviews>
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;