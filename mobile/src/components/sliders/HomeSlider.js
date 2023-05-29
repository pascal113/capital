import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

const HomeSlider = (props) => {
    const { t }  = useTranslation(['page']);
    const { homeData } = props;
    const sliderData = homeData;

    return (
        <Swiper style={{
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "5px"
            }}
            modules={[Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {
                sliderData.map((item, i) => {
                    const { _id, path} = item;

                    return (
                        <SwiperSlide
                            key={_id}
                            className={`wrapper home_wrapper`}
                        >
                            <div className='slider_hover_caption'>
                                <div className='hover_caption'>
                                    <div >
                                        <img src="/images/mark/mark_center.png" className="hover_mark" alt="Nature"></img>
                                    </div>
                                    <div className="hover_company_text">
                                        <h1>{t('home.company')}</h1>
                                    </div>
                                    <div className="hover_line">
                                    </div>
                                    <div className="hover_slug_text">
                                        <h2>{t('home.slogan')}</h2>
                                    </div>
                                </div>
                            </div>
                            <figure className="slider_container">
                                <img src={`${path}`} alt="sliders" />
                            </figure>
                        </SwiperSlide>
                    );
                })
            }
            <div>
        </div>
        </Swiper>
    );
};

export default HomeSlider;