import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next';

const ApplySuccess = () => {
    const { t }  = useTranslation(['page']);
    return (
        <>
            <section id="apply" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/about-us/about-company-top.png"
                        label="HUMAN RESOURCES MANAGER" 
                        textTop="50%"
                        fontSize="30px"
                    />
                    <BreadCrumb />
                    <div className='apply_success_wrapper'>
                    <div className='send-image'>
                        <img src="/images/pages/about-us/about-us-send.png" alt="" />
                    </div>   
                    <div className='title'><h1>{t('apply_success.title')}</h1></div>
                    <div className='comment'><span >{t('apply_success.comment')}</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplySuccess