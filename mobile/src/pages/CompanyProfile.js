import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";
import { Fade } from 'react-awesome-reveal';

const CompanyProfile = () => {
    const { t } = useTranslation(['page']);
    return (
        <>
            <section id="company_profile" className="section">
                <div className="container">
                    <Fade duration='1000' direction='left'>
                        <ImageViewer
                            img="/images/pages/company-profile-top.png"
                            textTop="60%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '25px'}
                            label={t('company_profile.image_label')}
                        />
                    </Fade>
                    <BreadCrumb />

                    <Fade duration='1000' direction='up'>
                        <div className='company_profile_info_wrapper'>
                            <h1 className='company_profile_title'>{t("company_profile.title")}</h1>
                            <div className='company_profile_rectangle'></div>
                            <p className='company_profile_description'>{t("company_profile.p1")}</p>
                        </div>
                    </Fade>
                    <div className="wrapper company_profile_wrapper">
                        <Fade duration='1000' direction='left'>
                            <div className="company_profile_left_col">
                                <p className='paragraph'>{t("company_profile.p2")}</p>
                            </div>
                        </Fade>
                        <Fade duration='1000' direction='right'>
                            <div className="company_profile_right_col">
                                <div className='border-box'>
                                    <img src="/images/pages/company-profile-1.png" alt="" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyProfile