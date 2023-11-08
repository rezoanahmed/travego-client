import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Destination from "./Destination";

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(()=>{
        axios.get("https://travego-server.vercel.app/destinations")
        .then(data=>setDestinations(data.data))
    },[])
    return (
        <div className="mt-10">
            <h1 className="font-medium text-center text-4xl">Highest {destinations.length} Tourist Attractions</h1>
            <div className="grid md:grid-cols-4 mt-10">
                {
                    destinations.map(destination=><Destination key={destination._id} destination={destination}></Destination>)
                }
            </div>
            
        </div>
    );
};

export default Destinations;