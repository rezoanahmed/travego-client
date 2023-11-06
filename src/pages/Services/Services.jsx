import axios from "axios";
import { useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/services")
        .then(response=>{
            // setServices(response.data);
            // console.log(response.data);
            setServices(response.data)
        })
    },[])
    // const fourServices = services.slice(0,4);
    return (
        <div className="mt-10">
            {/* {services.length} */}
            <h1 className="font-medium text-center text-4xl">We're here to serve you with our exciting packages</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="flex justify-center mt-10">
                
            <Link to='/services' className="bg-travego text-white p-4 rounded-md hover:bg-travego2 duration-300">Show All Services</Link>
            </div>
        </div>
    );
};

export default Services;