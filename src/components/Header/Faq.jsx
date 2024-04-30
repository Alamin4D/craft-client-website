import { useTypewriter } from "react-simple-typewriter";
import image5 from "../../assets/image5.jpg"
import image6 from "../../assets/image6.jpg"

const Faq = () => {
    const [typeEffect] = useTypewriter({
        words: ['Question We Had'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })
    return (
        <div className="my-20">
            <div className="flex flex-col gap-10 lg:flex-row justify-center items-center">
                <div className="flex justify-center items-center gap-4">
                    <img className="h-[80%] w-[50%] rounded-s-2xl" src={image5} alt="" />
                    <img className="h-[80%] w-[50%] rounded-e-2xl" src={image6} alt="" />
                </div>
                <div>
                    <div className="space-y-4">
                        <h5 className="text-yellow-700 mb-4 text-xl">FAQ</h5>
                        <div className="flex gap-1">
                            <h2 className="text-2xl font-bold text-black">The Most</h2>
                            <span className="text-2xl font-bold">{typeEffect}</span>
                        </div>
                        <p className="text-base">Ut ex turpis, faucibus et porta nec, pretium sed dui. Vestibulum eget ante efficitur, vulputate felis et, venenatis erat. Integer viverra, lectus id tincidunt iaculis, erat nibh euismod mi, sit amet tristique nibh lacus ut risus. Duis condimentum mauris nisl, id aliquet enim malesuada a. Maecenas suscipit eleifend nibh.</p>
                    </div>
                    <div className="my-10">
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                Donec aliquet neque sed sapien
                            </div>
                            <div className="collapse-content">
                                <p>Donc sapien Duis condimentum mauris nisl, id aliquet enim malesuada a. Maecenas suscipit eleifend nibh.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Vivamus eu turpis at nulla elementum
                            </div>
                            <div className="collapse-content">
                                <p>vivemus, lectus id tincidunt iaculis, erat nibh euismod mi, sit amet tristique nibh lacus ut risus. Duis condimentum mauris nisl, id aliquet enim malesuada a. Maecenas suscipit eleifend nibh.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Etiam egestas nibh in nisl pretium
                            </div>
                            <div className="collapse-content">
                                <p>pretium sed dui. Vestibulum eget ante efficitur, vulputate felis et, venenatis erat. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;