import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { _id, name, description, photo, price, userPhoto, username } = service;

    return (
        <div className="flex justify-center p-4">
            <div className="border flex flex-col md:flex-row rounded-md shadow-md hover:shadow-2xl duration-300 overflow-auto">
                <img src={photo} alt="img" className="md:w-1/2" />
                <div className="p-5 space-y-3">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">{name}</h1>
                        <p className="font-bold text-xl text-travego2">${price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={userPhoto} alt="user photo" className="rounded-full h-8" />
                        <p className="text-lg font-medium text-gray-700">{username}</p>
                    </div>
                    <p className="text-gray-600">{description.slice(0, 100)}...<Link className="text-travego font-bold">Read More</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Service;