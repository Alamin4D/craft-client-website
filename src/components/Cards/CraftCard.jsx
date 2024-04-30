import { Link } from "react-router-dom";


const CraftCard = ({ craft }) => {
    const { _id, image, item_Name, short_Description } = craft;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl space-y-4">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title">{item_Name}</h2>
                    <p>{short_Description}</p>
                    <div className="card-actions">
                        <Link to={`/viewDetails/${_id}`}>
                            <button className="btn bg-yellow-700 text-white">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;