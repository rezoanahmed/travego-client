import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
    const [services, setServices] = useState([]);
    axios.get("http://localhost:3000/services")
        .then(response => {
            // setServices(response.data);
            // console.log(response.data);
            setServices(response.data)
        })
        // console.log(services);
    return (
        <div>
            {/* {services.map(element => {
                
                <p>{element.name}</p>
            })} */}
            {
                services.map(service=>{
                    // console.log(service);
                    <div>
                    <div className="flex justify-center">
                        <div className="border rounded-md shadow-md hover:shadow-2xl duration-300 overflow-auto h-[420px] w-[600px]">
                            <img src={service.image} alt="img" className="h-[300px] w-full" />
                            <div className="p-5">
                                <h1 className="font-bold text-xl">{service.title}</h1>
                                <p className="text-gray-600">{service.description.slice(0, 100)}...<Link className="text-travego font-bold">Read More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                })
            }
        </div>
    );
};

export default AllServices;