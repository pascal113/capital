import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import "swiper/css/effect-fade";

const ImageSlider = ( props ) => {

    const slider = props.data;
    const imgStyle = {width: slider.imgWidth,  height: slider.imgHeight};

    return (
        <Swiper 
            modules={[Pagination, A11y, Autoplay, EffectFade]}
            effect={"fade"}
            loop={true}
            speed={400}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: slider.delay,
                disableOnInteraction: false,
            }}
        >
            {
                slider.images.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                                <img src={item} alt="sliders" style={imgStyle}/>
                            {/*<div className='imgContainer' style={imgStyle} >
                                <img src={item} alt="slider-img" />
                            </div>*/}
                        </SwiperSlide>
                    );
                })
            }
            <div>
        </div>
        </Swiper>
    );
};

export default ImageSlider;