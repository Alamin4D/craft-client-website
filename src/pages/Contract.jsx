import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TbClockHour4 } from "react-icons/tb";

import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"



const Contract = () => {
    return (
        <div className="my-20">
            <div className="flex flex-col gap-10 lg:flex-row justify-center items-center">
                <div className="flex justify-center items-center gap-4">
                    <img className="h-[80%] w-[50%] rounded-s-2xl" src={image5} alt="" />
                    <img className="h-[80%] w-[50%] rounded-e-2xl" src={image6} alt="" />
                </div>
                <div>
                    <div className="space-y-4">
                        <h5 className="text-yellow-700 mb-4 text-xl">Contact</h5>
                        <h2 className="text-2xl font-bold text-black">Lets Contact With Us</h2>
                        <p className="text-base">Vestibulum eget ante efficitur, vulputate felis et, venenatis erat. Integer viverra, lectus id tincidunt iaculis, erat nibh euismod mi, sit amet tristique nibh lacus ut risus. Duis condimentum mauris nisl, id aliquet enim malesuada a. Maecenas suscipit eleifend nibh.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row my-10 gap-6">
                        <div className="md:text-4xl text-2xl text-yellow-700">
                            <FaLocationDot></FaLocationDot>
                        </div>
                        <div>
                            <h2 className="md:text-xl text-base font-semibold">Location</h2>
                            <p>99 Roving St., Big City, PKU</p>
                            <span>2345</span>
                        </div>
                        <div className="md:text-4xl text-2xl text-yellow-700">
                            <MdEmail></MdEmail>
                        </div>
                        <div>
                            <h2 className="md:text-xl text-base font-semibold">Email</h2>
                            <p>hello@awesomesite.com |</p>
                            <span>contact@awesomesite.com</span>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row my-10 gap-6">
                        <div className="md:text-4xl text-2xl text-yellow-700">
                            <FaPhone></FaPhone>
                        </div>
                        <div>
                            <h2 className="md:text-xl text-base font-semibold">Phone</h2>
                            <span>+123-456-789 | +234-256-278</span>
                        </div>
                        <div className="md:text-4xl text-2xl text-yellow-700">
                            <TbClockHour4></TbClockHour4>
                        </div>
                        <div>
                            <h2 className="md:text-xl text-base font-semibold">Work Hours</h2>
                            <span>Mon - Fri : 09:00 AM – 18:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
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
                                Get In Touch
                            </span>
                        </p>
                    </div>
                    {/* form */}
                    <form>
                        <div className="flex gap-8 ">
                            <div className="flex-1">
                                <label className="block mb-2 dark:text-white" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                    type="text"
                                    placeholder="Name"
                                    id="name"
                                    name="name"
                                />
                            </div>
                            {/* Right side */}
                            <div className="flex-1">
                                <label className="block mb-2 dark:text-white" htmlFor="image">
                                    Email
                                </label>
                                <input
                                    className="w-full p-2 border rounded-md focus:outline-yellow-700"
                                    type="text"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                />
                            </div>
                        </div>
                        <label className="block mb-2 dark:text-white" htmlFor="image">
                            Subject
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-yellow-700"
                            type="text"
                            placeholder="Subject"
                            id="subject"
                            name="subject"
                        />

                        <label className="block mb-2 dark:text-white" htmlFor="image">
                            Message
                        </label>
                        <textarea className="textarea textarea-bordered w-full p-2 border rounded-md focus:outline-yellow-700" placeholder="Bio"></textarea>
                        <input
                            className="px-4 flex text-center mx-auto justify-center items-center py-2 mt-4 rounded hover:bg-yellow-700  bg-yellow-700 duration-200 text-white cursor-pointer font-semibold"
                            type="submit"
                            value="Submit Now"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contract;