import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import Dosage from '../components/product/Dosage';
import { useTranslation } from 'react-i18next'

const Production = () => {
    const { t }  = useTranslation(['page']);
    const dosage_01={id: "1", imgSrcHover:'/images/pages/production/product_btn_active_01.png', imgSrc:'/images/pages/production/product_btn_inactive_01.png'};
    const dosage_02={id: "2", imgSrcHover:'/images/pages/production/product_btn_active_02.png', imgSrc:'/images/pages/production/product_btn_inactive_02.png'};
    const dosage_03={id: "3", imgSrcHover:'/images/pages/production/product_btn_active_03.png', imgSrc:'/images/pages/production/product_btn_inactive_03.png'};
    const dosage_04={id: "4", imgSrcHover:'/images/pages/production/product_btn_active_04.png', imgSrc:'/images/pages/production/product_btn_inactive_04.png'};

    return (
        <>
            <section id="production" className="section">
                <div className="container">
                    <img src="/images/pages/production/production-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='production_title'>{t("production.title")}</h1>
                    <div className='production_rectangle'></div>
                    <div className='production_description'>
                        <img src="/images/pages/production/production-description.png" alt="" />
                    </div>
                    <div className="wrapper production_wrapper">
                        <div className='production_left_col'>
                            <p className='paragraph paragraph-1'>{t("production.left_p1")}</p>
                            <p className='paragraph paragraph-2'>{t("production.left_p2")}</p>
                        </div>
                        <div className='production_right_col'>
                            <img src="/images/pages/production/production-1.png" alt="" />
                        </div>
                    </div>
                    <h2 className='production_slogan'>{t("production.slogan_title")}</h2>
                    <div className='production_slogan_content'>
                        <p>{t("production.slogan_left")}</p>
                        <p>{t("production.slogan_right")}</p>
                    </div>
                    <div className='production_dosage'>
                        <span>{t("production.dosage_title")}</span>
                    </div>
                    <div className='production_dosage_draw'>
                        <img src="/images/pages/production/product_curve_line.png" alt="" className='production_dosage_curve_lines'/>
                        <div className='production_dosage_container'>
                            <Dosage data={dosage_01} />
                            <Dosage data={dosage_02} />
                            <Dosage data={dosage_03} />
                            <Dosage data={dosage_04} />
                        </div>   
                    </div>
                </div>
            </section>
        </>
    )
}

export default Production