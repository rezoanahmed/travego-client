import Lottie from "lottie-react";
import LoadingAnimation from '../../Lottie/LoadingAnimation.json'

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Lottie animationData={LoadingAnimation} loop={true}></Lottie>
        </div>
    );
};

export default Loading;