import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import AdviceCard from '../components/advice/AdviceCard';
import ImageSlider from '../components/sliders/ImageSlider';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

const Advice = () => {
    const { t } = useTranslation(['page']);
    const adviceCards = t('advice.cards', { returnObjects: true });
    const adviceSliders = {
        delay: 2000,
        imgWidth: '100%',
        imgHeight: 'auto',
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
                    <Fade duration='3000' direction=''>
                        <ImageViewer
                            img="/images/pages/advice/advice-top.png"
                            textTop="60%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '25px'}
                            label={t('advice.image_label')}
                        />
                    </Fade>
                    <BreadCrumb />

                    <Fade duration='1000' direction='left'>
                        <div className='advice_info_wrapper'>
                            <h1 className='advice_title'>{t("advice.title")}</h1>
                            <div className='advice_rectangle'></div>
                        </div>
                    </Fade>

                    <div className="wrapper advice_wrapper">
                        <Fade duration='1000' direction='left'>
                            <div className="advice_left_col">
                                <p className='paragraph'><strong>{t('advice.p1_strong')}</strong></p>
                                <p className='paragraph'>{t('advice.p1_normal')}</p>
                            </div>
                        </Fade>
                        <Fade duration='1000' direction='right'>
                            <div className="advice_right_col">
                                <div className='border-box'>
                                    <div className='advice_slider'>
                                        <ImageSlider data={adviceSliders} />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade duration='1000'>
                        <div className='advice_services'>
                            <span className='title'>{t('advice.service')}</span>
                            <div className='wrapper'>
                                <AdviceCard data={adviceCards[0]} />
                                <AdviceCard data={adviceCards[1]} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default Advice