import axios from "axios";
import useAuth from "../../hooks/useAuth/useAuth";
import { useEffect, useState } from "react";
import MyBooking from "./MyBooking";


const MyBookings = () => {
    const {user} = useAuth();
    const [bookings, setBookings] = useState([]);
        axios.get(`http://localhost:3000/bookings?usermail=${user.email}`)
        .then(res=>{
            // console.log(res.data);
            setBookings(res.data);
        })

   
    return (
        <div>
            <div className="p-4 md:p-20 flex flex-col gap-10">
                {bookings.map(booking=><MyBooking key={booking._id} booking={booking}></MyBooking>)}
            </div>
        </div>
    );
};

export default MyBookings;