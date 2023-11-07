import { useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import axios from "axios"
import MyServices from './MyServices';

const Manage = () => {
    const {user} = useAuth();
    const [services, setServices] = useState([]);
    // console.log(user.email);
    axios.get(`http://localhost:3000/myservices?email=${user.email}`)
    .then(res=>{
        setServices(res.data)
    })
    
    return (
        <div>
            <div className='p-4 md:p-20 flex flex-col gap-10'>
                {services.map(service=><MyServices key={service._id} service={service}></MyServices>)}
            </div>
        </div>
    );
};

export default Manage;