import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const loadedCrafts = useLoaderData();
    return (
        <div>
            <div className="grid my-8 gap-8 md:grid-cols-4 px-4">
                <div className="flex justify-center items-center md:col-span-2 py-6 bg-[#F3F3F3] rounded-2xl">
                    <img data-aos="zoom-in" data-aos-duration="1000" className="md:w-full md:h-full" src={loadedCrafts.image} alt="" />
                </div>
                <div className="md:col-span-2 space-y-2">
                    <h1 data-aos="fade-left" data-aos-delay="1000" className="text-4xl font-bold">{loadedCrafts.item_Name}</h1>
                    <p data-aos="fade-left" data-aos-delay="1500" className="mt-2 mb-2 text-base">{loadedCrafts.subcategory_Name}</p>
                    <p data-aos="fade-left" data-aos-delay="2000"><span className="text-base">description:</span>{loadedCrafts.short_Description}</p>
                    <p data-aos="fade-left" data-aos-delay="2600">price: <span className="text-base font-semibold ml-6"></span>{loadedCrafts.price}</p>
                    <p data-aos="fade-left" data-aos-delay="2800">customization: <span className="text-base font-semibold ml-20"></span>{loadedCrafts.customization}</p>
                    <p data-aos="fade-left" data-aos-delay="3000">processing_time: <span className="text-base font-semibold ml-6"></span>{loadedCrafts.processing_time}</p>
                    <p data-aos="fade-left" data-aos-delay="3000">stockStatus: <span className="text-base font-semibold ml-6"></span>{loadedCrafts.stockStatus}</p>
                    <p data-aos="fade-left" data-aos-delay="3000">rating: <span className="text-base font-semibold ml-6"></span>{loadedCrafts.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;