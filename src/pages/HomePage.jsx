import { useTypewriter } from 'react-simple-typewriter'
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Header/Banner";
import AboutUs from "./AboutUs";
import CraftCard from "../components/Cards/CraftCard";
import Faq from "../components/Header/Faq";



const HomePage = () => {
    const [typeEffect] = useTypewriter({
        words: ['Article'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
    const crafts = useLoaderData();
    return (
        <div>
            <Banner />
            <AboutUs />
            <div className="space-y-4 my-16">
                <div className='flex gap-1 justify-center items-center text-center mx-auto'>
                    <h2 className="text-4xl font-semibold text-center">Read Our</h2>
                    <span className='text-4xl font-semibold'>{typeEffect}</span>
                </div>
                <p className="md:w-2/3 mx-auto text-center">In sed posuere nunc. Praesent a faucibus nisl, vel volutpat ex. In ornare molestie neque sit amet vulputate. Sed ut ultrices sem. Fusce laoreet, urna ac mollis fringilla.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    crafts.map(craft => <CraftCard
                        key={craft._id}
                        craft={craft}
                    ></CraftCard>)
                }
            </div>
            <Faq />
        </div>
    );
};

export default HomePage;