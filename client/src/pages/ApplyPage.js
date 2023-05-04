import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import { useParams, useNavigate } from "react-router-dom";
import ImageViewer from '../components/image/ImageViewer';
import SelectUploadFile from '../components/upload/SelectUploadFile';
import { useTranslation } from 'react-i18next';

const ApplyPage = () => {
    const { id } = useParams();
    const id_num = parseInt(id);
    const navigate = useNavigate();
    const { t }  = useTranslation(['page']);
        
    const imgViwerData = {
        img: "/images/pages/about-us/about-company-top.png",
        label: "People are the power to success",
        textTop: '105px',
        fontSize: '30px',
        fontFamily: 'Din Pro Bold',
        textColor: 'white',
    };

    const handleRest = e => {
        //clearChildState(); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*const { job_type_select, location_select, activity_select } = e.target.elements;
        
        let details = {
            job_type: job_type_select.value,
            location: location_select.value,
            activity: activity_select.value,
        };
        console.log('value', details);*/
        navigate('/apply-success');
    };

    return (
        <>
            <section id="apply" className="section">
                <div className="container">
                    <ImageViewer data={imgViwerData} />
                    <BreadCrumb />
                    <div className='apply_wrapper'>
                        <div className='title'><h1>{t('apply.title')}</h1></div>
                        <div className='comment'><span >{t('apply.comment')}</span></div>
                        <form className='apply_form' onSubmit={handleSubmit} method="POST">
                            <div className='form_control'>
                                <span className='label'>{t('apply.firstname_label')}</span>
                                <input name="firstname" type="text" placeholder={t('apply.mandatory_placeholder')} required />
                            </div>
                            <div className='form_control'>
                                <span className='label'>{t('apply.lastname_label')}</span>
                                <input name="lastname" type="text" placeholder={t('apply.mandatory_placeholder')} required />
                            </div>
                            <div className='form_control'>
                                <span className='label'>{t('apply.email_label')}</span>
                                <input name="email" type="email" placeholder={t('apply.mandatory_placeholder')} required />
                                <span className='label_comment'>{t('apply.email_comment')}</span>
                            </div>
                            <div className='form_control'>
                                <span className='label'>{t('apply.phone_label')}</span>
                                <input name="phone" type="tel" placeholder={t('apply.mandatory_placeholder')} required pattern="^[ +0-9]*$"/>
                                <span className='label_comment'>{t('apply.phone_comment')}</span>
                            </div>

                            <div className='form_control'>
                                <div className='apply-upload-section'>
                                    <div className='apply-upload-label'>
                                        <span className='label'>{t('apply.cv_label_top')}</span>
                                        <span className='label'>{t('apply.cv_label_bottom')}</span>
                                    </div>
                                    <SelectUploadFile />
                                </div>
                                <div className='apply-upload-section'>
                                    <div className='apply-upload-label'>
                                        <span className='label'>{t('apply.reports_label_top')}</span>
                                        <span className='label-small'>{t('apply.reports_label_bottom')}</span>
                                    </div>
                                    <SelectUploadFile />
                                </div>
                                <div className='apply-upload-section'>
                                    <span className='label'>{t('apply.other_doc_label')}</span>
                                    <SelectUploadFile />
                                </div>
                                
                            </div>

                            <div className='form_control'>
                                <span className='label'>{t('apply.entry_date_label')}</span>
                                <input name="entry_date" type="text" placeholder={t('apply.phone_comment')} required pattern="^(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(?:(?:19|20)[0-9]{2})$"/>
                                <span className='label_comment'>{t('apply.entry_date_comment')}</span>
                            </div>
                            <div className='form_control'>
                                <span className='label'>{t('apply.salary_label')}</span>
                                <input name="salary" type="text" placeholder={t('apply.optional_placeholder')} />
                            </div>
                            <div className='form_control'>
                                <span className='label'>{t('apply.aware_label')}</span>
                                <input name="aware" type="text" placeholder={t('apply.optional_placeholder')} />
                            </div>
                            <div className='form_control'>
                                <span className='label'>{t('apply.transfer_apply_label')}</span>
                                <div className='radio-box-section'>
                                    <input type="radio" name="radio-box" id="radio-box" className="custom-radio"/>
                                    <span className='radio-label'>{t('apply.yes')}</span>
                                    <span className='radio-comment'>{t('apply.transfer_apply_agree')}</span>
                                </div>
                                <div className='radio-box-section'>
                                    <input type="radio" name="radio-box" id="radio-box" className="custom-radio"/>
                                    <span className='radio-label'>{t('apply.no')}</span>
                                    <span className='radio-comment'>{t('apply.transfer_apply_disagree')}</span>
                                </div>
                            </div>
                            <div className='form_control agree-policy'>
                                <span className='label'>{t('apply.confirm_label')}</span>
                                <a target="_blank" href="https://www.gc-pharma.de/de/datenschutzerklaerung.html" className='link-apply'>{t('apply.privacy_link')}</a>
                                <div className='check-box-section'>
                                    <input type="checkbox" name="check-box" id="check-box" className="custom-check" />
                                    <span className='check-label'>{t('apply.privacy_agree_label')}</span>
                                </div>        
                            </div>
                            <div className='apply-button-range'>
                                <button type="reset" className="apply_interrupt_button" onClick={handleRest}>{t('apply.reset_button')}</button>
                                <button type="submit" className="base_button apply_submit_button">{t('apply.submit_button')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplyPage