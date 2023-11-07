import axios from "axios"
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
const Add = () => {


    const {user} = useAuth();
    const navigate = useNavigate();
    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const location = form.location.value;
        const description = form.desc.value;

        const service = {
            name, price, photo, location, description, username: user.displayName, userPhoto: user.photoURL,
            email: user.email,
        };
        // console.log(service);
        axios.post("http://localhost:3000/services", service)
        .then(res=>{
            if(res.data.insertedId){
                // console.log(user.displayName);
                // console.log(res.data.insertedId);
                // console.log(res);
                Swal.fire("","Service Added Successfully!!!", "success");
                form.reset();
                navigate("/manage");

            }
        })
        .catch(err=>{
            if(err){
                Swal.fire("", "Something Went Wrong!", "error");
            }
        })
    }


    return (
        <div>
            <div className="text-center mt-10 font-bold text-4xl">
                <h1>Add The Service You Want To Provide</h1>
            </div>
            <div>
                <form onSubmit={handleAdd} className="grid md:grid-rows-3 md:grid-cols-2 gap-5 max-w-[500px] mx-auto py-10">
                    <input name="name" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Service Name"/>
                    <input name="price" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price"/>
                    <input name="photo" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Photo URL"/>
                    <input name="location" className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Location"/>
                    <input name="desc" className="col-span-2 border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Short Description"/>
                    <input type="submit" value="Add Service" className="col-span-2 bg-travego text-white hover:bg-travego2 p-2 rounded-md shadow-md" />
                </form>
            </div>
        </div>
    );
};

export default Add;