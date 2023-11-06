
const Add = () => {
    return (
        <div>
            <div className="text-center mt-10 font-bold text-4xl">
                <h1>Add The Service You Want To Provide</h1>
            </div>
            <div>
                <form className="grid md:grid-rows-3 md:grid-cols-2 gap-5 max-w-[500px] mx-auto py-10">
                    <input className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Service Name"/>
                    <input className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Price"/>
                    <input className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Photo URL"/>
                    <input className="border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Location"/>
                    <input className="col-span-2 border border-travego2 p-2 rounded-md shadow-md" type="text" placeholder="Short Description"/>
                    <input type="submit" value="Add Service" className="col-span-2 bg-travego text-white hover:bg-travego2 p-2 rounded-md shadow-md" />
                </form>
            </div>
        </div>
    );
};

export default Add;