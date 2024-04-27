

const AddCraft = () => {
    const handleAddToCraft = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_Description = form.short_Description.value;
        const price = form.price.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const newCraft = { name, subcategory_Name, short_Description, price, customization, processing_time, stockStatus, rating, image }
        console.log(newCraft);

        // send data to the server
        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="gadgetContainer pt-10">
            <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="dark:text-white">
                            {/* <span className="text-[#FF497C]">
                                {update ? "Update " : "Add "}
                            </span> */}
                            Add Craft
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleAddToCraft}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="name">
                                Item_name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter Name"
                                id="name"
                                name="name"
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="brand"
                            >
                                Subcategory_Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter Subcategory_Name"
                                id="subcategory_Name"
                                name="subcategory_Name"
                            />
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="brand"
                            >
                                Short_Description
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter Short description"
                                id="short_Description"
                                name="short_Description"
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Price
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter Price"
                                id="Price"
                                name="price"
                            />
                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="image">
                                Customization
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter Customization"
                                id="customization"
                                name="customization"
                            />
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                Processing_time
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter processing_time"
                                id="processing_time"
                                name="processing_time"
                            />
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                StockStatus
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter stockStatus"
                                id="stockStatus"
                                name="stockStatus"
                            />
                            <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                Rating
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                type="text"
                                placeholder="Enter Rating"
                                id="rating"
                                name="rating"
                            />

                        </div>
                    </div>
                    <label className="block mb-2 dark:text-white" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="w-full p-2 border rounded-md focus:outline-yellow-700"
                        type="text"
                        placeholder="Enter Image URL"
                        id="image"
                        name="image"
                    />

                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-yellow-700  bg-yellow-700 duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Add button"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddCraft;