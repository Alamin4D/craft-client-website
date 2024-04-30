import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CraftCardList = ({ craftList, crafts, setCrafts }) => {
    const { _id, image, item_Name, price, rating, customization, stockStatus } = craftList;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://craft-store-server-ten.vercel.app/craft/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });
                            const remaining = crafts.filter(craft => craft._id !== _id);
                            setCrafts(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl space-y-3">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item_Name}</h2>
                    <div className="flex">
                        <p>{price}</p>
                        <p>{rating}</p>
                    </div>
                    <div className="flex">
                        <p>{customization}</p>
                        <p>{stockStatus}</p>
                    </div>
                    <div className="card-actions flex justify-between mt-4">
                        <Link to={`/updatePage/${_id}`}>
                            <button className="btn bg-yellow-700 text-white">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-yellow-700 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftCardList;