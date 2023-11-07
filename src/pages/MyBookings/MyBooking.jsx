import { Link } from "react-router-dom";


const MyBooking = ({booking}) => {
    const {_id, name, price, hostName, hostEmail, location, photo, date, usermail, instructions, userPhoto} = booking;
    return (
        <div className="">
            <div className="grid md:grid-cols-6 gap-2 items-center shadow-lg">
                <div className="">
                    <img src={photo} alt={photo} className="rounded-md" />
                </div>
                <div className="md:col-span-5 space-y-2 p-4">
                    <div className="flex justify-between">
                        <p className="text-2xl font-bold">{name}</p>
                        <p className="text-2xl font-medium text-travego2">{price}</p>
                    </div>
                    <p className="text-lg">{location}</p>
                    <p className="text-lg">{date}</p>
                    <div className="flex gap-2">
                        <Link className="text-green-700 font-medium hover:underline">Update</Link>
                        <Link className="text-red-700 font-medium hover:underline">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <p>{name}</p>
        // </div>
    );
};

export default MyBooking;