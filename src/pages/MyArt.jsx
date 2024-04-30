import { useLoaderData } from "react-router-dom";
import CraftCardList from "../components/Cards/CraftCardList";
import { useState } from "react";


const MyArt = () => {
    const LoadedCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(LoadedCrafts);
    const [displayCrafts, setDisplayCrafts] = useState([]);


    const handleCraftsFilter = filter => {
        if(filter === 'Yes'){
            setDisplayCrafts(displayCrafts)
        }
        else if(filter === 'No'){
            setDisplayCrafts(displayCrafts)
        }
    }
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Customization</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleCraftsFilter('Yes')}><a>Yes</a></li>
                    <li onClick={() => handleCraftsFilter('No')}><a>No</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    crafts.map(craftList => <CraftCardList
                        key={craftList._id}
                        craftList={craftList}
                        crafts={crafts}
                        setCrafts={setCrafts}
                    ></CraftCardList>)
                }
            </div>
        </div>
    );
};

export default MyArt;