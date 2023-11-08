import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import axios from "axios";
import Swal from "sweetalert2";

const MySchedule = ({schedule}) => {
    const {_id, name, price, hostName, hostEmail, location, photo, date, usermail, instructions, userPhoto,status} = schedule;

    const navigate = useNavigate();

    const handleConfirm = () =>{
        const status = "Confirmed";
        axios.patch(`https://travego-server.vercel.app/schedules/${_id}`, {status})
        .then(response=>{
            console.log(response.data);
            Swal.fire("","Schedule Has Been Confirmed", "success")
            navigate("/")
        })

    }

    const handleCancel = () =>{
        const status = "Cancelled";
        axios.patch(`https://travego-server.vercel.app/schedules/${_id}`, {status})
        .then(response=>{
            console.log(response.data);
            Swal.fire("","Schedule Has Been Cancelled", "error")
            navigate("/")
        })

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
                    <p className="text-lg">{usermail}</p>
                    <p className={`text-white p-2 rounded-md w-[10%] text-center text-sm ${status=="Confirmed"?"bg-green-600":""} ${status=="Cancelled"?"bg-red-600":""} ${status=="Pending"?"bg-yellow-600":""}`}>{status}</p>
                    <div className={`${status=="Pending"?"flex gap-2":"hidden"}`}>
                        <button onClick={handleConfirm} className="text-green-700 font-medium hover:underline">Confirm</button>
                        <button onClick={handleCancel} className="text-red-700 font-medium hover:underline">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <p>{name}</p>
        // </div>
    );
};

MySchedule.propTypes={
    schedule: PropTypes.object.isRequired
}

export default MySchedule;