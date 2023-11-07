import { useLoaderData } from "react-router-dom";

const UpdateBookings = () => {
    const {_id, name, price, hostName, hostEmail, location, photo, date, usermail, instructions} = useLoaderData();
    return (
        <div>
            <div className="mt-10 z-100 p-5 bg-white dark:bg-black rounded-md shadow-2xl bg-opacity-95 md:mx-[400px] col-span-2">
                <form className="flex flex-col md:grid md:grid-cols-2 gap-5 max-w-[500px] mx-auto py-2">
                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Service</label>
                        <input defaultValue={name}  disabled name="name" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Service Name" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Price</label>
                        <input defaultValue={price}  disabled name="price" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Host Name</label>
                        <input defaultValue={hostName}  disabled name="hostName" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
                    </div>

                    <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Host Email</label>
                    <input defaultValue={hostEmail} disabled name="hostEmail" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
                    </div>

                    <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Location</label>
                    <input defaultValue={location} disabled name="location" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Location" />
                    </div>

                    <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Photo</label>
                    <input defaultValue={photo} disabled name="photo" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Location" />
                    </div>

                    <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Date</label>
                    <input defaultValue={date} type="date" name="date" className="border border-travego2 p-2 rounded-md shadow-md" required />
                    </div>

                    <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Your Email</label>
                    <input defaultValue={usermail} name='usermail' type="email" disabled className="border border-travego2 p-2 rounded-md shadow-md" />
                    </div>

                    <div className="flex flex-col col-span-2">
                    <label className="text-xs text-gray-500 mb-1">Special Instructions</label>
                    <input defaultValue={instructions} name="instructions" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Special Instructions" />
                    </div>
                    <input type="submit" value="Update Booking" className="col-span-2 bg-travego text-white hover:bg-travego2 p-2 rounded-md shadow-md" />
                </form>
                
            </div>
        </div>
        // <p>dsf</p>
    );
};

export default UpdateBookings;