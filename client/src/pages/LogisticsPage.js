import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import LogisticsCard from '../components/logistics/LogisticsCard';
import { useTranslation } from 'react-i18next';

const LogisticsPage = () => {
    const { t }  = useTranslation(['page']);
    const cardData = t('logistics.cards', { returnObjects: true });
    console.log('')
    return (
        <>
            <section id="logistics" className="section">
                <div className="container">
                    <img src="/images/pages/logistics/logistics-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='logistics_title'>{t("logistics.title")}</h1>
                    <div className='logistics_rectangle'></div>
                    <p className='logistics_description'>{t("logistics.description")}</p>
                    <div className='logistics_wrapper'>
                        <LogisticsCard props={cardData[0]}></LogisticsCard>
                        <LogisticsCard props={cardData[1]}></LogisticsCard>
                        <LogisticsCard props={cardData[2]}></LogisticsCard>
                    </div>
                    <div className='logistics_slogan'>
                        <img src="/images/pages/logistics/logistics-slogan.png" alt="" />
                        <blockquote className='logistics_slogan_content'>{t("logistics.slogan")}</blockquote>
                    </div>
                    <div className='logistics_contact_wrapper'>
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
                        <div className='contact_right_column'>
                            <img src="/images/pages/logistics/logistics_map.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsPage
