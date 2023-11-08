import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AllService from "./AllService";


const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        axios.get("https://travego-server.vercel.app/services")
        .then(response=>{
            // setServices(response.data);
            // console.log(response.data);
            setServices(response.data)
        })
    },[])
    // const fourServices = services.slice(0,4);
    return (
        <div className="pt-10 dark:bg-[#1f2937] dark:text-[#949ea9]">
            {/* {services.length} */}
            <h1 className="font-medium text-center text-4xl">We're here to serve you with our exciting packages</h1>
            <div className="mt-10 grid grid-cols-1 gap-4">
                {
                    services.map(service=><AllService key={service._id} service={service}></AllService>)
                }
            </div>
            
        </div>
    );
};

export default AllServices;