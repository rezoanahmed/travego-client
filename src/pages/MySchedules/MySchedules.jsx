import axios from "axios";
import useAuth from "../../hooks/useAuth/useAuth";
import { useState } from "react";
import MySchedule from "./MySchedule";
import { Helmet } from "react-helmet-async";


const MySchedules = () => {
    const { user } = useAuth();
    const [schedules, setSchedules] = useState([]);
    axios.get(`https://travego-server.vercel.app/schedules?hostEmail=${user.email}`, {withCredentials:true})
        .then(response => {
            setSchedules(response.data);
        })
    return (
        <>
        <Helmet>
            <title>Travego | My Schedules</title>
        </Helmet>
            <div className="dark:bg-[#1f2937] dark:text-[#949ea9]">
                <h1 className="pt-10 text-center text-4xl font-medium">You Have {schedules.length} Schedule(s)</h1>
            </div>
            <div className="dark:bg-[#1f2937] dark:text-[#949ea9] p-4 md:p-20 flex flex-col gap-10">
                {
                    schedules.map(schedule => <MySchedule key={schedule._id} schedule={schedule}></MySchedule>)
                }
            </div>
        </>
    );
};

export default MySchedules;