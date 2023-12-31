import PropTypes from "prop-types"

const Review = ({reviews}) => {
    const {name, review, image} = reviews;
    return (
        <div className="flex flex-col justify-center items-center max-w-xs border p-4 rounded-md shadow-md space-y-1 dark:border-none dark:shadow-xl dark:shadow-black">
            <img src={image} alt="" className="h-36 w-36 rounded-full" />
            <p className="font-bold text-center">{name}</p>
            <p className="text-sm text-gray-600 italic text-center">"{review}"</p>
        </div>
    );
};

Review.propTypes = {
    reviews: PropTypes.object.isRequired,
}

export default Review;