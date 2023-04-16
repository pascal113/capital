import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import { displayMoney } from '../../helpers/utils';
import productsData from '../../data/productsData';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';

const HomeSlider = () => {

    const heroProducts = productsData.filter(item => item.tag === 'hero-product');

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
                heroProducts.map((item, i) => {
                    const { id, title, tagline, heroImage, finalPrice, originalPrice, path } = item;
                    const newPrice = displayMoney(finalPrice);
                    const oldPrice = displayMoney(originalPrice);

                    return (
                        <SwiperSlide
                            key={id}
                            className={`wrapper hero_wrapper`}
                        >
                            <div className='hero_over_item'>
                                <div className="hero_item_mark">
                                    <img src="/images/mark/mark_center.png" alt="Nature"></img>
                                </div>
                                <div className="hero_item_company_text">
                                    <h1>GERMAN CAPITAL PHARMA GmbH</h1>
                                </div>
                                <div className="hero_item_line">
                                </div>
                                <div className="hero_item_slug_text">
                                    <h2>Gesundheit für das Leben</h2>
                                </div>
                                
                            </div>
                            <figure className="hero_item_img">
                                <img src={heroImage} alt="product-img" />
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