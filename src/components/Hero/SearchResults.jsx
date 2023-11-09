import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SearchResults = ({ res }) => {
    const { name, photo,description,price,_id } = res;
    return (
        <div className="shadow-xl p-2 flex flex-row-reverse gap-2">
            <div className="max-w-xl flex justify-between items-center">
                <div>
                <p className="text-2xl font-bold">{name}</p>
                <p className="max-w-lg">{description.slice(0,150)}...<Link to={`/service/${_id}`} className="font-medium text-travego2 dark:text-blue-600">See More</Link></p>
                </div>
                <div className="font-bold text-travego2  dark:text-blue-600 text-xl">
                    ${price}
                </div>
            </div>
            <img src={photo} alt="" className="max-h-[150px]" />

        </div>
    );
};

SearchResults.propTypes = {
    res: PropTypes.object.isRequired,
}

export default SearchResults;