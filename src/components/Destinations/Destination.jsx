

const Destination = ({ destination }) => {
    const { name, city, country, image } = destination;
    return (
        <div className="">
            <img src={image} alt="destinations" className="h-48 w-full" />
                <div className="-mt-20 w-48 p-2 absolute bg-black bg-opacity-50">
                    <p className="text-xl font-medium text-white">{name}</p>
                    <p className="text-white">{city},{country}</p>
                </div>
            
        </div>
    );
};

export default Destination;