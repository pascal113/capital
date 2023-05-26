import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

const CompanyProfile = () => {
    const { t }  = useTranslation(['page']);
    return (
        <>
            <section id="company_profile" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/company-profile-top.png"
                        textTop="60%"
                        fontSize="25px"
                        label={t('company_profile.image_label')}
                    />
                    <BreadCrumb />
                    <div className='company_profile_info_wrapper'>
                        <h1 className='company_profile_title'>{t("company_profile.title")}</h1>
                        <div className='company_profile_rectangle'></div>
                        <p className='company_profile_description'>{t("company_profile.p1")}</p>
                    </div>
                    <div className="wrapper company_profile_wrapper">
                        <div className="company_profile_left_col">
                            <p className='paragraph'>{t("company_profile.p2")}</p>
                        </div>
                        <div className="company_profile_right_col">
                            <div className='border-box'>
                                <img src="/images/pages/company-profile-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyProfile