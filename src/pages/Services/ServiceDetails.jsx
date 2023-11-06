import { useLoaderData } from "react-router-dom"

const ServiceDetails = () => {
    const { name, price, photo, location, description, username, userPhoto } = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-10 gap-5">
            <div>
                <img src={photo} alt={photo} className="rounded-md" />
            </div>
            <div className="space-y-2">
                <p className="text-4xl font-bold">{name}</p>
                <p className="text-3xl font-bold text-travego">${price}</p>
                <p className="text-xl">{location}</p>
                <hr />
                <div className="flex items-center gap-2">
                    <img src={userPhoto} alt="avatar" className="h-8 w-8 rounded-full" />
                    <p className="text-2xl font-medium text-gray-800">{username}</p>
                </div>
                <hr />
                <p className="text-gray-600">{description}</p>
            </div>
            <button className="col-span-2 bg-travego text-white p-2 rounded-md hover:bg-travego-2">Book Now</button>
            
        </div>
    );
};

export default ServiceDetails;