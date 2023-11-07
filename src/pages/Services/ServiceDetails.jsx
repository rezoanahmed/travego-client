import { useLoaderData, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
    const { user } = useAuth();
    const { name, price, photo, location, description, username, userPhoto, email } = useLoaderData();
    // modal functions
    const showModal = () => {
        const modal = document.getElementById("modal");
        modal.classList.remove('hidden')
    }
    const hideModal = () => {
        const modal = document.getElementById("modal");
        modal.classList.add('hidden')
    }
    const navigate =  useNavigate();

    // booking handler
    const handleBooking = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const hostName = form.hostName.value;
        const hostEmail = form.hostEmail.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const date = form.date.value;
        const usermail = form.usermail.value;
        const instructions = form.instructions.value;

        const bookingDetails = {name, price, hostName, hostEmail, location, photo, date, usermail, instructions, userPhoto: user.photoURL};
        // console.log(bookingDetails);
        axios.post("http://localhost:3000/bookings", bookingDetails)
        .then(res=>{
            // console.log(res.data);
            if(res.data.insertedId){
                Swal.fire("","Your Booking Has Been Confirmed", "success");
                form.reset();
                navigate("/mybookings");

            }
        })
    }

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 p-2 md:p-10 gap-5 items-center">
            <div className="">
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
            <button onClick={showModal} className="col-span-2 bg-travego p-2 rounded-md text-white font-medium">Book Now</button>


            {/* modal */}
            <div id="modal" className="hidden z-100 p-20 bg-white dark:bg-black rounded-md shadow-2xl bg-opacity-95 -mt-[750px] md:-mt-[570px] md:mx-[400px] col-span-2">
                <form onSubmit={handleBooking} className="flex flex-col md:grid md:grid-cols-2 gap-5 max-w-[500px] mx-auto py-2">
                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Service</label>
                        <input defaultValue={name} disabled name="name" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Service Name" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Price</label>
                        <input defaultValue={`$${price}`} disabled name="price" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-xs text-gray-500 mb-1">Host Name</label>
                        <input defaultValue={username} disabled name="hostName" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
                    </div>

                    <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Host Email</label>
                    <input defaultValue={email} disabled name="hostEmail" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
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
                    <input type="date" name="date" className="border border-travego2 p-2 rounded-md shadow-md" required />
                    </div>

                    <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Your Email</label>
                    <input defaultValue={user.email} name='usermail' type="email" disabled className="border border-travego2 p-2 rounded-md shadow-md" />
                    </div>

                    <div className="flex flex-col col-span-2">
                    <label className="text-xs text-gray-500 mb-1">Special Instructions</label>
                    <input name="instructions" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Special Instructions" />
                    </div>
                    <input type="submit" value="Book Now" className="col-span-2 bg-travego text-white hover:bg-travego2 p-2 rounded-md shadow-md" />
                </form>
                <button onClick={hideModal} className="bg-red-500 w-full p-2 text-white rounded-md">Close</button>
            </div>
        </div>


    );
};

export default ServiceDetails;