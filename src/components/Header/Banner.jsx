import { Swiper, SwiperSlide } from 'swiper/react';


import banner from "../../assets/bannerbestimage.jpg"
import potter from "../../assets/potter.jpg"
import tea from "../../assets/teapotter.jpg"
import teaCup from "../../assets/teacup.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[ Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-xl text-white font-semibold">Molding The Clay</h1>
                            <img className="w-full" src={banner} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative">
                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-xl text-white font-semibold">Arts $ Handcraft</h1>
                            <img className="w-full" src={potter} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative">
                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-2xl text-white font-semibold">Tea Pottery</h1>
                            <img className="w-full" src={tea} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative">
                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl text-2xl text-white font-semibold">Ceramic Cup</h1>
                            <img className="w-full" src={teaCup} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;