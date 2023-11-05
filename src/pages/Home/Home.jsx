import Hero from "../../components/Hero/Hero";
import Why from "../../components/Why/Why";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="p-4 md:p-8">
                <Services></Services>
                <Why></Why>
            </div>
        </div>
    );
};

export default Home;