import React, { useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import { useParams, useNavigate } from "react-router-dom";
import ImageViewer from '../components/image/ImageViewer';
import SelectUploadFile from '../components/upload/SelectUploadFile';
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import { useDispatch } from "react-redux";
import { sendJobMail } from "../redux/apiCalls";
import { Fade } from 'react-awesome-reveal';

const ApplyPage = () => {
    const { id } = useParams();
    const id_num = parseInt(id);
    const navigate = useNavigate();
    const { t } = useTranslation(['page']);
    const [date, setDate] = useState(new Date());
    const [fileCV, setCVFileData] = useState(null);
    const [fileReport, setReportFileData] = useState(null);
    const [fileOther, setOtherFileData] = useState(null);

    const [selectedOption, setSelectedOption] = useState('option_yes');
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const handleCancel = e => {
        //clearChildState(); 
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('job mail');

        const { firstname, lastname, email, phone, duty_date, salary,
            aware, radio_box_yes, radio_box_no, check_box_policy } = e.target.elements;

        let application_process = true;
        if (selectedOption === 'option_no') {
            application_process = false;
        }

        const form = new FormData();
        form.append("first_name", firstname.value);
        form.append("last_name", lastname.value);
        form.append("email", email.value);
        form.append("phone_number", phone.value);
        form.append("statement_duty", duty_date.value);
        form.append("payment", salary.value);
        form.append("attented", aware.value);
        form.append("application_process", application_process);

        console.log(fileCV);

        if (fileCV !== null) {
            form.append("resume", fileCV);
        }

        if (fileReport !== null) {
            form.append("certificate", fileReport);
        }

        if (fileOther !== null) {
            form.append("document", fileOther);
        }

        let params = {
            first_name: firstname.value,
            last_name: lastname.value,
            email: email.value,
            phone_number: phone.value,
            statement_duty: duty_date.value,
            payment: salary.value,
            attented: aware.value,
            application_process: application_process
        };
        console.log('value', params);

        let res = sendJobMail(form, dispatch);
        if (res) {
            navigate('/apply-success');
        }
    };

    return (
        <>
            <section id="apply" className="section">
                <div className="container">
                    <Fade duration='1000' direction='left'>
                        <ImageViewer
                            img="/images/pages/about-us/about-company-top.png"
                            textTop="50%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '30px'}
                            label="HUMAN RESOURCES MANAGER"
                        />
                    </Fade>
                    <BreadCrumb />

                    <div className='apply_wrapper'>
                        <Fade duration='1000' direction='up'>
                            <div className='title'><h1>{t('apply.title')}</h1></div>
                        </Fade>
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
                                <input name="phone" type="tel" placeholder={t('apply.mandatory_placeholder')} required pattern="^[ +0-9]*$" />
                                <span className='label_comment'>{t('apply.phone_comment')}</span>
                            </div>

                            <div className='form_control'>
                                <div className='apply-upload-section'>
                                    <div className='apply-upload-label'>
                                        <span className='label'>{t('apply.cv_label_top')}</span>
                                        <span className='label'>{t('apply.cv_label_bottom')}</span>
                                    </div>
                                    <SelectUploadFile setFileData={setCVFileData} />
                                </div>
                                <div className='apply-upload-section'>
                                    <div className='apply-upload-label'>
                                        <span className='label'>{t('apply.reports_label_top')}</span>
                                        <span className='label-small'>{t('apply.reports_label_bottom')}</span>
                                    </div>
                                    <SelectUploadFile setFileData={setReportFileData} />
                                </div>
                                <div className='apply-upload-section'>
                                    <span className='label'>{t('apply.other_doc_label')}</span>
                                    <SelectUploadFile setFileData={setOtherFileData} />
                                </div>

                            </div>

                            <div className='form_control'>
                                <span className='label'>{t('apply.entry_date_label')}</span>
                                <DatePicker
                                    name="duty_date"
                                    selected={date}
                                    onChange={date => setDate(date)}
                                    dateFormat="dd.MM.yyyy"
                                />
                                {/*<input name="entry_date" type="text" placeholder={t('apply.mandatory_placeholder')} required pattern="^(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(?:(?:19|20)[0-9]{2})$"/>
                                <span className='label_comment'>{t('apply.entry_date_comment')}</span>*/}
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
                                    <input type="radio" name="radio_box_yes" id="radio-box" className="custom-radio"
                                        value="option_yes" checked={selectedOption === 'option_yes'} onChange={handleOptionChange} />
                                    <span className='radio-label'>{t('apply.yes')}</span>
                                    <span className='radio-comment'>{t('apply.transfer_apply_agree')}</span>
                                </div>
                                <div className='radio-box-section'>
                                    <input type="radio" name="radio_box_no" id="radio-box" className="custom-radio"
                                        value="option_no" checked={selectedOption === 'option_no'} onChange={handleOptionChange} />
                                    <span className='radio-label'>{t('apply.no')}</span>
                                    <span className='radio-comment'>{t('apply.transfer_apply_disagree')}</span>
                                </div>
                            </div>
                            <div className='form_control agree-policy'>
                                <span className='label'>{t('apply.confirm_label')}</span>
                                <a target="_blank" href="https://www.gc-pharma.de/de/datenschutzerklaerung.html" className='link-apply'>{t('apply.privacy_link')}</a>
                                <div className='check-box-section'>
                                    <input type="checkbox" name="check_box_policy" id="check-box" className="custom-check"
                                        checked={isChecked} onChange={handleCheckboxChange} />
                                    <span className='check-label'>{t('apply.privacy_agree_label')}</span>
                                </div>
                            </div>
                            <div className='apply-button-range'>
                                <button type="cancel" className="apply_interrupt_button" onClick={handleCancel}>{t('apply.cancel_button')}</button>
                                <button type="submit" className="base_button apply_submit_button" disabled={!isChecked}>{t('apply.submit_button')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplyPage