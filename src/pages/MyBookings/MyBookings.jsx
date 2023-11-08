import axios from "axios";
import useAuth from "../../hooks/useAuth/useAuth";
import { useState } from "react";
import MyBooking from "./MyBooking";


const MyBookings = () => {
    const {user} = useAuth();
    const [bookings, setBookings] = useState([]);
        axios.get(`https://travego-server.vercel.app/bookings?usermail=${user.email}`, {withCredentials:true})
        .then(res=>{
            // console.log(res.data);
            setBookings(res.data);
        })

   
    return (
        <div>
            <div>
                <h1 className="mt-10 text-center text-4xl font-medium">You Have {bookings.length} Booking(s)</h1>
            </div>
            <div className="p-4 md:p-20 flex flex-col gap-10">
                {bookings.map(booking=><MyBooking key={booking._id} booking={booking}></MyBooking>)}
            </div>
        </div>
    );
};

export default MyBookings;