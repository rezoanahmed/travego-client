import Hero from "../../components/Hero/Hero";
import Why from "../../components/Why/Why";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="p-4 md:p-8">
            <Why></Why>
            </div>
        </div>
    );
};

export default Home;