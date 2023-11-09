import axios from "axios";
import useAuth from "../../hooks/useAuth/useAuth";
import { useState } from "react";
import MyBooking from "./MyBooking";
import { Helmet } from "react-helmet-async";


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
            <Helmet>
                <title>Travego | My Bookings</title>
            </Helmet>
            <div className="dark:bg-[#1f2937] dark:text-[#949ea9]">
                <h1 className="pt-10 text-center text-4xl font-medium ">You Have {bookings.length} Booking(s)</h1>
            </div>
            <div className="p-4 md:p-20 flex flex-col gap-10 dark:bg-[#1f2937] dark:text-[#949ea9]">
                {bookings.map(booking=><MyBooking key={booking._id} booking={booking}></MyBooking>)}
            </div>
        </div>
    );
};

export default MyBookings;