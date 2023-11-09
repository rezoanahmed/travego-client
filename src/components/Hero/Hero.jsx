import axios from "axios";
import { element } from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import SearchResults from "./SearchResults";

const Hero = () => {
    const [searchItem, setSearchItem] = useState([]);
    const [finalResult, setFinalResult] = useState([]);
    const search = (e) =>{
        const searchValue = e.target.value;
        console.log(searchValue);
        axios.get("https://travego-server.vercel.app/services")
        .then(response=>{
            // setServices(response.data);
            // console.log(response.data);
            setSearchItem(response.data)
        })
        const result = searchItem.filter(item=>{
            console.log(searchValue.toLowerCase());
            const searchResult = (item.name.toLowerCase().includes(searchValue));
            return searchResult;
            
        })
        // console.log(result);
        setFinalResult(result);

        
    }
    // console.log(finalResult);


    return (
        <>
        <div>
            <div className="bg-[url('https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-96 bg-cover bg-bottom">
                <div className="font-bold text-[10px] md:text-base text-white flex flex-col justify-center items-center h-full  bg-black bg-opacity-50 dark:bg-opacity-70 gap-10">
                    <div className="dark:text-[#949ea9] text-[8px] md:text-base">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Travego | Your Journey, Our Expertise.',
                                1500,
                                'Travego | Navigate Your Next Adventure',
                                1500,
                                'Travego | Explore Locally, Travel Globally',
                                1500,
                                'Travego | Your Local Journey Begins Here',
                                1500,
                                'Travego | Uncover Hidden Gems Locally',
                                1500,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                            />
                    </div>
                    {/* <Link to='/login' className="bg-travego dark:dark:bg-[#1f2937] dark:text-[#949ea9] py-1 px-2 rounded-md hover:bg-travego2 duration-300 ease-in-out">Book Your Journey Now</Link> */}
                    <div className="flex flex-col md:flex-row">
                        <form>
                            <input onChange={search} name="search" type="text" placeholder="Search Services" className="p-2  bg-black text-white bg-opacity-70" />
                            <button className="bg-travego dark:bg-blue-600 p-2">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
            {
                finalResult.map(element=><SearchResults key={element._id} res={element}></SearchResults>)
            }
        </div>
    </>
    );
};

export default Hero;