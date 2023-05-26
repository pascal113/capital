import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next';

const JobPostings = () => {
    const { t }  = useTranslation(['page']);
    return (
        <>
            <section id="job_postings" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/job-postings/job-postings-top.png"
                        textTop="65%"
                        fontSize="25px"
                        label={t('job_posting.image_label')}
                    />
                    <BreadCrumb />
                    <h1 className='job_postings_title'>{t('job_posting.title')}</h1>
                    <div className='job_postings_rectangle'></div>
                    <p className='job_postings_description'>{t('job_posting.description')}</p>
                    <Link to="/about-us">
                        <button type="button" className="base_button posting_button">{t('job_posting.button_label')}</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default JobPostings