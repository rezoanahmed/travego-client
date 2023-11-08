
import {BsTicketPerforatedFill,BsFillLightbulbFill, BsFillCalendarFill, BsFillStarFill} from "react-icons/bs"
const Why = () => {
    return (
        <div className="mt-10">
            <h1 className="text-4xl font-medium mb-10 text-center">Why Booking With Trave<span className="text-travego2">Go</span>?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex justify-center items-center flex-col gap-2">
                    <BsTicketPerforatedFill className="text-6xl text-travego2"></BsTicketPerforatedFill>
                    <h1 className="font-medium text-2xl">Free Cancellation</h1>
                    <p className="text-sm">Stay flexible on your trip.</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <BsFillLightbulbFill className="text-6xl text-travego2"></BsFillLightbulbFill>
                    <h1 className="font-medium text-2xl">300,000+ experiences</h1>
                    <p className="text-sm">Make memories around the world.</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <BsFillCalendarFill className="text-6xl text-travego2"></BsFillCalendarFill>
                    <h1 className="font-medium text-2xl">Reserve now, pay later</h1>
                    <p className="text-sm">Book your spot.</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <BsFillStarFill className="text-6xl text-travego2"></BsFillStarFill>
                    <h1 className="font-medium text-2xl">Trusted reviews</h1>
                    <p className="text-sm">4.5 stars from 140,000+ Trustpilot reviews.</p>
                </div>
            </div>
        </div>
    );
};

export default Why;