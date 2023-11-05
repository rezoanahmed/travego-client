import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div>
            <div className="bg-[url('https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-96 bg-cover bg-bottom">
                <div className="font-bold text-[10px] md:text-base text-white flex flex-col justify-center items-center h-full  bg-black bg-opacity-50 gap-10">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Travego | Your Journey, Our Expertise.',
                            1500,
                            'Travego | Navigate Your Next Adventure',
                            1500,
                            'Travego | Explore Locally, Travel Globally',
                            1500,
                            'Travego | Uncover Hidden Gems Locally',
                            1500,
                            'Travego | Your Local Journey Begins Here',
                            1500,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                    <button className="bg-travego py-1 px-2 rounded-md hover:bg-travego2 duration-300 ease-in-out">Book Your Journey Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;