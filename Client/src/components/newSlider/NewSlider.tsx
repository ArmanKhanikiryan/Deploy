import './NewSlider.css';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './NewSlider.css'
import img1 from '../../assets/images/facade.jpg'
import img2 from '../../assets/images/facade2.jpg'
import img3 from '../../assets/images/facade3.jpg'
import img4 from '../../assets/images/facade4.jpg'
import { Autoplay, Pagination, Navigation } from "swiper";


const NewSlider = () => {
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <img src={img1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt=""/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default NewSlider;