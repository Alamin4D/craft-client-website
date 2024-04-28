import { Link, useLoaderData } from "react-router-dom";


const CraftItems = () => {
  const crafts = useLoaderData();
  return (
    <div>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Subcategory_Name</th>
              <th>Price</th>
              <th>Customization</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="border">
            {/* row 1 */}
            {
              crafts.map((craft, index) => <tr key={craft._id}>
                <th className="border-t">{index + 1}</th>
                <td className="border">{craft.name}</td>
                <td className="border">{craft.subcategory_Name}</td>
                <td className="border">{craft.price}</td>
                <td className="border">{craft.customization}</td>
                  <button className="justify-center items-center text-blue-500 p-5 border-t">View Details</button>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CraftItems;