import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

const CorporateGols = () => {
    const { t }  = useTranslation(['page']);
    return (
        <>
            <section id="corporate_goals" className="section">
                <div className="container">
                    <img src="/images/pages/corporate-goals-top.png" alt="" />
                    <BreadCrumb />
                    <div className='corporate_goals_info_wrapper'>
                        <h1 className='corporate_goals_title'>{t("corporate_goals.title")}</h1>
                        <div className='corporate_goals_rectangle'></div>
                        <p className='corporate_goals_description'><strong>{t("corporate_goals.p1_strong")}</strong>{t("corporate_goals.p1_normal")}</p>
                    </div>
                    <div className="wrapper corporate_goals_wrapper">
                        <div className="corporate_goals_left_col">
                        
                            <p className='paragraph'>{t("corporate_goals.left_p1")}</p>
                            <p className='paragraph'>{t("corporate_goals.left_p2")}</p>
                            <div className='border-box' />
                        </div>
                        
                        <div className="corporate_goals_right_col">
                            <p className='paragraph'>{t("corporate_goals.right_p1")}</p>
                            <p className='paragraph'>{t("corporate_goals.right_p2")}</p>
                            
                        </div>
                    </div>
                    <img src="/images/pages/corporate-goals-1.png" alt="" className='corporate_goals_img'/>
                    
                </div>
            </section>
        </>
    )
}

export default CorporateGols