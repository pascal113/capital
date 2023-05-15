import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import AdviceCard from '../components/advice/AdviceCard';
import ImageSlider from '../components/sliders/ImageSlider';
import { useTranslation } from 'react-i18next';

const Advice = () => {
    const { t }  = useTranslation(['page']);
    const adviceCards = t('advice.cards', { returnObjects: true });
    const adviceSliders = {
        delay: 2000,
        imgWidth: '572px',
        imgHeight: '471px',
        images: [
            "/images/pages/advice/advice-slider-1.png",
            "/images/pages/advice/advice-slider-2.png",
            "/images/pages/advice/advice-slider-3.png"
        ]
    };

    return (
        <>
            <section id="advice" className="section">
                <div className="container">
                    <img src="/images/pages/advice/advice-top.png" alt="" />
                    <BreadCrumb />
                    <div className='advice_info_wrapper'>
                        <h1 className='advice_title'>{t("advice.title")}</h1>
                        <div className='advice_rectangle'></div>
                    </div>
                    <div className="wrapper advice_wrapper">
                        <div className="advice_left_col">
                            <p className='paragraph'><strong>{t('advice.p1_strong')}</strong></p>
                            <p className='paragraph'>{t('advice.p1_normal')}</p>
                        </div>
                        <div className="advice_right_col">
                            <div className='border-box' />
                            <div className='slider'>
                                <ImageSlider data={adviceSliders} />
                            </div>
                        </div>
                    </div>
                    <div className='advice_services'>
                        <span className='title'>{t('advice.service')}</span>
                        <div className='wrapper'>
                            <AdviceCard data={ adviceCards[0]} />
                            <AdviceCard data={ adviceCards[1]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advice