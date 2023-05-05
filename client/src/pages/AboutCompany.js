import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import { Link, useParams } from "react-router-dom";
import ImageViewer from '../components/image/ImageViewer';
//import aboutCompanyData from '../data/aboutCompanyData';
import { useTranslation } from 'react-i18next';

const AboutCompany = () => {
    const { id } = useParams();
    const id_num = parseInt(id);
    const { t }  = useTranslation(['page']);

    const imgViwerData = {
        img: "/images/pages/about-us/about-company-top.png",
        label: "HUMAN RECOURCES MANAGER",
        textTop: '105px',
        fontSize: '25px',
        fontFamily: 'Din Pro Bold',
        textColor: 'white',
    };

    const aboutCompanyData = t('about_company', {returnObjects: true});

    return (
        <>
            <section id="about_company" className="section">
                <div className="container">
                    <ImageViewer data={imgViwerData} />
                    <BreadCrumb />
                    <div className='about_company_wrapper'>
                        <h1 className='paragraph paragraph_text'>{aboutCompanyData.introduction}</h1>
                        {
                            aboutCompanyData.content.map((contents, index) => {
                                return (
                                    <div key={index} className='paragraph'>
                                        <h2 className='paragraph_text'>{contents.title}</h2>
                                        <h3 className='subtitle paragraph_text'>{contents.subtitle}</h3>
                                        <ul className='detail'>
                                        {
                                            contents.detail.map((item, index) => {
                                                return (
                                                <li key={index}><h4>{item}</h4></li>
                                                );
                                            })
                                        }
                                        </ul>
                                    </div>
                                );
                            })
                        }

                        <div className='info'>
                            {
                                aboutCompanyData.info.contact.map((item, index) => {
                                    return (
                                        <h2 key={index} className='contact paragraph_text'>{item}</h2>
                                    );
                                })
                            }
                            {
                                aboutCompanyData.info.comment.map((item, index) => {
                                    return (
                                        <h2 key={index} className='comment paragraph_text'>{item}</h2>
                                    );
                                })
                            }
                        </div>
                        <Link to="/apply">
                            <button type="button" className="base_button apply_button">{t('about_company.button_label')}</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCompany