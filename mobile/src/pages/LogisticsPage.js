import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import LogisticsCard from '../components/logistics/LogisticsCard';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

const LogisticsPage = () => {
    const { t } = useTranslation(['page']);
    const cardData = t('logistics.cards', { returnObjects: true });

    return (
        <>
            <section id="logistics" className="section">
                <div className="container">
                    <Fade duration='1000' direction='left'>
                        <ImageViewer
                            img="/images/pages/logistics/logistics-top.png"
                            textTop="60%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '25px'}
                            label={t('logistics.image_label')}
                        />
                    </Fade>
                    <BreadCrumb />

                    <Fade duration='1000' direction='up'>
                        <div className='logistics_info_wrapper'>
                            <h1 className='logistics_title'>{t("logistics.title")}</h1>
                            <div className='logistics_rectangle'></div>
                            <p className='logistics_description'>{t("logistics.description")}</p>
                        </div>
                    </Fade>

                    <Fade duration='1000'>
                        <div className='logistics_wrapper'>
                            <LogisticsCard props={cardData[0]}></LogisticsCard>
                            <LogisticsCard props={cardData[1]}></LogisticsCard>
                            <LogisticsCard props={cardData[2]}></LogisticsCard>
                        </div>
                    </Fade>

                    <Fade duration='1000'>
                        <div className='logistics_slogan'>
                            <img className='desktop_img' src="/images/pages/logistics/logistics-slogan.png" alt="" />
                            <img className='mobile_img' src="/images/pages/logistics/logistics-slogan_m.png" alt="" />
                            <blockquote className='logistics_slogan_content'>{t("logistics.slogan")}</blockquote>
                        </div>
                    </Fade>
                    <div className='logistics_contact_wrapper'>
                        <Fade duration='1000' direction='left'>
                            <div className='contact_left_column'>
                                <p className='contact_title'>
                                    <span>{t("logistics.contact_title")}</span>
                                </p>
                                <p className='contact_content'>
                                    <span>{t("logistics.contact_content")}</span>
                                </p>
                                <Link to="/contacts">
                                    <button type="button" className="base_button contact_button">{t("logistics.contact_button")}</button>
                                </Link>
                            </div>
                        </Fade>
                        <div className='contact_right_column'>
                            <div style={{ textAlign: 'left' }}><img src="/images/pages/logistics/logistics_map.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsPage
