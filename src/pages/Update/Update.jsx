import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const { _id, name, photo, price, location,description } = useLoaderData();
    const handleUpdate = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const location = form.location.value;
        const description = form.desc.value;

        const service = {
            name, price, photo, location, description
        };
        // console.log(service);
        axios.patch(`http://localhost:3000/service/${_id}`, service)
        .then(res=>{
            console.log(res.data);
        })
    }
    return (
        <div>
            <div>
                <div className="text-center mt-10 font-bold text-4xl">
                    <h1>Update {name}</h1>
                </div>
                <div>
                    <form onSubmit={handleUpdate} className="grid md:grid-rows-3 md:grid-cols-2 gap-5 max-w-[500px] mx-auto py-10">
                        <input name="name" defaultValue={name} className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Service Name" />
                        <input name="price" defaultValue={price} className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price" />
                        <input name="photo" defaultValue={photo} className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Photo URL" />
                        <input name="location" defaultValue={location} className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Location" />
                        <input name="desc" defaultValue={description} className="col-span-2 border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Short Description" />
                        <input type="submit" value="Update Service" className="col-span-2 bg-travego text-white hover:bg-travego2 p-2 rounded-md shadow-md" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;