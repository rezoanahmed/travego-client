import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types"

const MyBooking = ({ booking }) => {
    const { _id, name, price, hostName, hostEmail, location, photo, date, usermail, instructions, userPhoto, status } = booking;

    // cancel function
    const handleCancel = (name, id) => {
        Swal.fire({
            title: "Confirm the cancellation of",
            text: `${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/bookings/${id}`, id)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "",
                                text: `Cancelled! ${name}`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="">
            <div className="grid md:grid-cols-6 gap-2 items-center shadow-lg">
                <div className="col-span-2">
                    <img src={photo} alt={photo} className="rounded-md" />
                </div>
                <div className="md:col-span-4 space-y-2 p-4">
                    <div className="flex justify-between">
                        <p className="text-2xl font-bold">{name}</p>
                        <p className="text-2xl font-medium text-travego2">{price}</p>
                    </div>
                    <p className="text-lg">{location}</p>
                    <p className="text-lg">{date}</p>
                    <p className="text-lg">{instructions}</p>
                    <p className={`rounded-md text-sm p-2 text-white text-center w-[10%] ${status=="Cancelled"? "bg-red-600":""}${status=="Confirmed"?"bg-green-600":""}${status=="Pending"?"bg-yellow-600":""}`}>{status}</p>
                    <div className={`flex gap-2 ${status=="Confirmed"?"hidden":""} ${status=="Cancelled"?"hidden":""}`}>
                        <Link to={`/updatebooking/${_id}`} className="text-green-700 font-medium hover:underline">Update</Link>
                        <Link onClick={()=>handleCancel(name, _id)} className="text-red-700 font-medium hover:underline">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <p>{name}</p>
        // </div>
    );
};

MyBooking.propTypes={
    booking: PropTypes.object.isRequired,
}

export default MyBooking;