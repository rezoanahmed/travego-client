import axios from "axios";
import useAuth from "../../hooks/useAuth/useAuth";
import { useState } from "react";
import MySchedule from "./MySchedule";


const MySchedules = () => {
    const { user } = useAuth();
    const [schedules, setSchedules] = useState([]);
    axios.get(`http://localhost:3000/schedules?hostEmail=${user.email}`)
        .then(response => {
            setSchedules(response.data);
        })
    return (
        <>
            <div>
                <h1 className="mt-10 text-center text-4xl font-medium">You Have {schedules.length} Schedule(s)</h1>
            </div>
            <div className="p-4 md:p-20 flex flex-col gap-10">
                {
                    schedules.map(schedule => <MySchedule key={schedule._id} schedule={schedule}></MySchedule>)
                }
            </div>
        </>
    );
};

export default MySchedules;