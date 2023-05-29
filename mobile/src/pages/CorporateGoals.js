import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";
import { Fade } from 'react-awesome-reveal';

const CorporateGols = () => {
    const { t } = useTranslation(['page']);
    return (
        <>
            <section id="corporate_goals" className="section">
                <div className="container">
                    <Fade duration='1000' direction='left'>
                        <ImageViewer
                            img="/images/pages/corporate-goals-top.png"
                            textTop="60%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '25px'}
                            label={t('corporate_goals.image_label')}
                        />
                    </Fade>
                    <BreadCrumb />

                    <Fade duration='1000' direction='up'>
                        <div className='corporate_goals_info_wrapper'>
                            <h1 className='corporate_goals_title'>{t("corporate_goals.title")}</h1>
                            <div className='corporate_goals_rectangle'></div>
                            <p className='corporate_goals_description'><strong>{t("corporate_goals.p1_strong")}</strong>{t("corporate_goals.p1_normal")}</p>
                        </div>
                    </Fade>
                    <div className="wrapper corporate_goals_wrapper">
                        <Fade duration='1000' direction='left'>
                            <div className="corporate_goals_left_col">
                                <div className='border-box'>
                                    <p className='paragraph'>{t("corporate_goals.left_p1")}</p>
                                    <p className='paragraph'>{t("corporate_goals.left_p2")}</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade duration='1000' direction='right'>
                            <div className="corporate_goals_right_col">
                                <p className='paragraph'>{t("corporate_goals.right_p1")}</p>
                                <p className='paragraph'>{t("corporate_goals.right_p2")}</p>
                            </div>
                        </Fade>
                    </div>
                    <img src="/images/pages/corporate-goals-1.png" alt="" className='corporate_goals_img' />

                </div>
            </section>
        </>
    )
}

export default CorporateGols