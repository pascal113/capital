import React, {useState} from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';
import styled, { css } from 'styled-components';
import { TextField } from "@mui/material";
import { useTranslation } from 'react-i18next';

const ValidationTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#777978',
        borderWidth: 1,
    },
    '& label.Mui-valid': {
        color: '#009220',
        borderWidth: 1,
    },

    '& input:valid + fieldset': {
        borderColor: '#777978',
        borderRadius: 0,
        borderWidth: 1,
        padding: '9px 12px 7px 9px',
        fontFamily: 'Din Pro Regular',
        color: '#B3B3B3',
    },
    '& input:invalid + fieldset': {
        borderColor: '#D30000',
        borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
        //padding: '4px !important', // override inline-style
        padding: '9px 12px 7px 9px',
        borderColor: '#777978',
    },
});


const InputTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#FDFDFD",

        '& fieldset': {
            border: '1px solid #959595',
        },

        "&:hover fieldset": {
            border: '1px solid #959595',
        },

        '&.Mui-focused fieldset': {
            border: '2px solid rgba(72, 128, 255, 0.4)',
        },
    },
});


;

const Contact = () => {
    const { t }  = useTranslation(['page']);
    const [status, setStatus] = useState("Submit");
    const department_options = t('contact.form_department_options', { returnObjects: true });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        
        const { department_select, company_name, phone_number, company_address, plz, email, message } = e.target.elements;
        let details = {
            department: department_select.value,
            company_name: company_name.value,
            phone_number: phone_number.value,
            company_address: company_address.value,
            plz: plz.value,
            email: email.value,
            message: message.value,
        };
        console.log('value', details);
        try {
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            setStatus("Submit");
            let result = await response.json();
            alert(result.status);
        } catch (error) {
            console.log('Fetch error: ', error);
        }
    };

    return (
        <>
            <section id="contact" className="section">
                <div className="container">
                    <img src="/images/pages/contact/contact-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='contact_title'>{t('contact.title')}</h1>
                    <div className='contact_rectangle'></div>
                    <div className="contact_position">
                        <div className="position_icon"><img src="/images/pages/contact/position.png" alt="" /></div>
                        <div className='headquarters'>{t('contact.headquarters')}</div>
                        <div className="position_address">
                            <h4>{t('contact.company_name')}</h4>
                            <p>{t('contact.company_address')}</p>
                            <p>{t('contact.company_city')}</p>
                            <p>{t('contact.company_country')}</p>
                        </div>
                        
                    </div>
                    <div className='contact_form_wrapper'>
                        <form className='contact_form' onSubmit={handleSubmit} method="POST">
                            <div className='form_item_title'><span>{t('contact.form_title')}</span></div>
                            <div className='form_item_comment'><span>{t('contact.form_comment')}</span></div>
                            <div className='form_item_department'>
                                <span className="label">{t('contact.form_department_label')}</span>
                                <CustomDropdown name='department_select' options={department_options} onChange={(e) => {console.log(e.target.value)}} style={{width: '192px', padding: '7px 0px 7px 9px', fontSize: 12}} />
                            </div>
                            <div className='form_item_company'>
                                <ValidationTextField
                                    label={t('contact.form_company_name_label')}
                                    variant="outlined"
                                    placeholder={t('contact.form_company_name_placeholder')}
                                    name="company_name"
                                    size="small"
                                    sx={{
                                        width: { sm: 192, md: 300 },
                                        
                                    }}
                                />
                                <ValidationTextField
                                    label={t('contact.form_company_phone_label')}
                                    variant="outlined"
                                    placeholder={t('contact.form_company_phone_placeholder')}
                                    name="phone_number"
                                    size="small"
                                    sx={{
                                        width: { sm: 192, md: 300 },
                                    }}
                                />
                            </div>
                            <div className='form_item_plz'>
                            <ValidationTextField
                                    label={t('contact.form_company_address_label')}
                                    variant="outlined"
                                    placeholder={t('contact.form_company_address_placeholder')}
                                    name="company_address"
                                    size="small"
                                    sx={{
                                        width: { sm: 192, md: 398 },
                                    }}
                                />
                                <ValidationTextField
                                    label={t('contact.form_company_postcode_label')}
                                    variant="outlined"
                                    placeholder={t('contact.form_company_postcode_placeholder')}
                                    name="plz"
                                    size="small"
                                    sx={{
                                        width: { sm: 192, md: 398 },
                                    }}
                                />
                            </div>
                            <div className='form_item_email'>
                                <ValidationTextField
                                    label={t('contact.form_company_email_label')}
                                    variant="outlined"
                                    placeholder={t('contact.form_company_email_placeholder')}
                                    name="email"
                                    size="small"
                                    sx={{
                                        width: { sm: 192, md: 398 },
                                    }}
                                />
                            </div>
                            <div className='form_item_message'>
                                <div className='label'>{t('contact.form_message_label')}</div>
                                <div className='message'>
                                    <InputTextField
                                        name="message"
                                        rows={8}
                                        multiline
                                        size="small"
                                        sx={{
                                            width: { sm: 402, md: 402 },
                                        }}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="base_button form_item_button">{t('contact.form_button_label')}</button>
                        </form>
                        <div className='contact_map'>
                            <img src="/images/pages/contact/map.png" alt="" />
                        </div>   
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact