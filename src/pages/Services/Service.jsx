import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { _id, title, description, image, price } = service;
    
    return (
        <div className="flex justify-center">
            <div className="border rounded-md shadow-md hover:shadow-2xl duration-300 overflow-auto h-[500px] w-[600px]">
                <img src={image} alt="img" className="h-[300px] w-full" />
                <div className="p-5">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="font-bold text-xl text-travego2">{price}</p>
                    <p className="text-gray-600">{description.slice(0, 100)}...<Link className="text-travego font-bold">Read More</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Service;