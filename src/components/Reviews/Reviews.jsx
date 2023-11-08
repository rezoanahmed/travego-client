import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import Review from "./Review";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get("https://travego-server.vercel.app/reviews")
            .then(response => {
                setReviews(response.data);
            })
    }, [])
    return (
        <div>
            <div className="mt-10">
                <div className="flex justify-center flex-col items-center">
                    <div>
                        <h1 className="font-bold text-4xl text-center">Serving Smiles, Creating Happiness!</h1>
                    </div>
                    <div className=" mt-10 grid grid-cols-1 md:grid-cols-4 justify-center gap-2">
                        {
                            reviews.map(review=><Review key={review._id} reviews={review}></Review>)
                        }
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Reviews;