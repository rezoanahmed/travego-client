
const MyServices = ({ service }) => {
    const { name, photo, price, location } = service
    return (
        <div className="">
            <div className="grid md:grid-cols-6 gap-2 items-center shadow-lg">
                <div className="">
                    <img src={photo} alt={photo} className="rounded-md"/>
                </div>
                <div className="col-span-5 space-y-2 p-4">
                    <div className="flex justify-between">
                        <p className="text-2xl font-bold">{name}</p>
                        <p className="text-2xl font-medium text-travego2">${price}</p>
                    </div>
                    <p className="text-lg">{location}</p>
                    <div className="flex gap-2">
                        <p className="text-green-700">Update</p>
                        <p className="text-red-700">Delete</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;