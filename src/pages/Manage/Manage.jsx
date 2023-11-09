import { useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import axios from "axios"
import MyServices from './MyServices';
import { Helmet } from 'react-helmet-async';

const Manage = () => {
    const {user} = useAuth();
    const [services, setServices] = useState([]);
    // console.log(user.email);
    axios.get(`https://travego-server.vercel.app/myservices?email=${user.email}`,{withCredentials:true})
    .then(res=>{
        setServices(res.data)
    })
    
    return (
        <div className='dark:bg-[#1f2937] dark:text-[#949ea9]'>
            <Helmet>
                <title>Travego | Manage Services</title>
            </Helmet>
            <div>
                <h1 className="pt-10 text-center text-4xl font-medium">You Have {services.length} Service(s)</h1>
            </div>
            <div className='p-4 md:p-20 flex flex-col gap-10'>
                {services.map(service=><MyServices key={service._id} service={service}></MyServices>)}
            </div>
        </div>
    );
};

export default Manage;