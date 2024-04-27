import image1 from ".././assets/image1.jpg"
import image2 from ".././assets/image2.jpg"
// import image3 from ".././assets/image3.jpg"

const AboutUs = () => {
    return (
        <div className="my-20">
            <div className="flex flex-col gap-8 lg:flex-row justify-center items-center">
                <div>
                    <h5 className="text-yellow-700 mb-4 text-xl">About Us</h5>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black">Creating Works Of Art <br /> Through Clay</h2>
                        <p className="text-base">Ut ex turpis, faucibus et porta nec, pretium sed dui. Vestibulum eget ante efficitur, vulputate felis et, venenatis erat. Integer viverra, lectus id tincidunt iaculis, erat nibh euismod mi, sit amet tristique nibh lacus ut risus. Duis condimentum mauris nisl, id aliquet enim malesuada a. Maecenas suscipit eleifend nibh.</p>
                        <button className="px-2 rounded-lg py-2 text-lg bg-yellow-700 text-white ">Read More</button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <img className="h-[80%] w-[50%] rounded-s-2xl" src={image1} alt="" />
                    <img className="h-[80%] w-[50%] rounded-e-2xl" src={image2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;