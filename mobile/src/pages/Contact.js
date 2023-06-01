import React, { useState } from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';
import ImageViewer from '../components/image/ImageViewer';
import styled from 'styled-components';
import { TextField } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { sendContactMail } from "../redux/apiCalls";
import { Fade } from 'react-awesome-reveal';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


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

const Contact = () => {
    const { t } = useTranslation(['page']);
    const department_options = t('contact.form_department_options', { returnObjects: true });

    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        company_name: Yup.string()
            .required('this field is required'),
        company_phone: Yup.string()
            .required('this field is required'),
        company_address: Yup.string()
            .required('this field is required'),
        company_plz: Yup.string()
            .required('this field is required'),
        email: Yup.string()
            .required('this field is required')
            .email('This field must be in email format'),
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(validationSchema)
    });
    
    const onSubmit = (data, e) => {
        e.preventDefault();
        const { department_select, company_name, company_phone, company_address, company_plz, email, user_message } = e.target.elements;
        let params = {
            department: department_select.value,
            company_name: company_name.value,
            company_phone: company_phone.value,
            company_address: company_address.value,
            company_plz: company_plz.value,
            email: email.value,
            user_message: user_message.value        
        };
        
        sendContactMail(params, dispatch);
    };

    return (
        <>
            <section id="contact" className="section">
                <div className="container">
                    <Fade duration='3000' direction=''>
                        <ImageViewer
                            img="/images/pages/contact/contact-top.png"
                            textTop="62%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '25px'}
                            label={t('contact.image_label')}
                        />
                    </Fade>
                    <BreadCrumb />
                    <Fade duration='1000' direction='left'>
                        <div className='contact_info_wrapper'>
                            <h1 className='contact_title'>{t('contact.title')}</h1>
                            <div className='contact_rectangle'></div>
                        </div>
                    </Fade>

                    <Fade duration='1000'>
                        <div className="contact_position">
                            <div className="position_icon"><img src="/images/pages/contact/position.png" alt="" /></div>
                            <div className='headquarters'>{t('contact.headquarters')}</div>
                            <div className="position_address">
                                <div className='address_info'>
                                    <h4>{t('contact.company_name')}</h4>
                                    <p>{t('contact.company_address')}</p>
                                    <p>{t('contact.company_city')}</p>
                                    <p>{t('contact.company_country')}</p>
                                </div>
                                <div className='address_info'>
                                    <h4>{t('contact.branch_company')}</h4>
                                    <h4>{t('contact.company_name')}</h4>
                                    <p>{t('contact.company_address_2')}</p>
                                    <p>{t('contact.company_city')}</p>
                                    <p>{t('contact.company_country')}</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <div className='contact_form_wrapper'>
                        <Fade duration='1000' direction='left'>
                            <form className='contact_form' onSubmit={handleSubmit(onSubmit)} method="POST">
                                <div className='form_item_title'><span>{t('contact.form_title')}</span></div>
                                <div className='form_item_comment'><span>{t('contact.form_comment')}</span></div>
                                <div className='form_item_department'>
                                    <span className="label">{t('contact.form_department_label')}</span>
                                    <CustomDropdown name='department_select' options={department_options} onChange={(e) => {}} style={{ width: '192px', padding: '7px 0px 7px 9px', fontSize: 12 }} />
                                </div>
                                <div className='form_item_company'>
                                    <ValidationTextField
                                        label={t('contact.form_company_name_label')}
                                        variant="outlined"
                                        placeholder={t('contact.form_company_name_placeholder')}
                                        name="company_name"
                                        size="small"
                                        autoComplete="company_name"
                                        required
                                        {...register('company_name')}
                                        error={errors.company_name ? true : false}    
                                        sx={{
                                            width: { sm: 192, md: 300 },

                                        }}
                                    />
                                    <ValidationTextField
                                        label={t('contact.form_company_phone_label')}
                                        variant="outlined"
                                        placeholder={t('contact.form_company_phone_placeholder')}
                                        name="company_phone"
                                        size="small"
                                        autoComplete="company_phone"
                                        required
                                        {...register('company_phone')}
                                        error={errors.company_phone ? true : false}    
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
                                        autoComplete="company_address"
                                        required
                                        {...register('company_address')}
                                        error={errors.company_address ? true : false}    
                                        sx={{
                                            width: { sm: 192, md: 398 },
                                        }}
                                    />
                                    <ValidationTextField
                                        label={t('contact.form_company_postcode_label')}
                                        variant="outlined"
                                        placeholder={t('contact.form_company_postcode_placeholder')}
                                        name="company_plz"
                                        size="small"
                                        autoComplete="company_plz"
                                        required
                                        {...register('company_plz')}
                                        error={errors.company_plz ? true : false}
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
                                        autoComplete="email"
                                        required
                                        {...register('email')}
                                        error={errors.email ? true : false}
                                        sx={{
                                            width: { sm: 192, md: 398 },
                                        }}
                                    />
                                </div>
                                <div className='form_item_message'>
                                    <div className='label'>{t('contact.form_message_label')}</div>
                                    <div className='message'>
                                        <InputTextField
                                            name="user_message"
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
                        </Fade>
                        <Fade duration='1000' direction='right'>
                            <div className='contact_map'>
                                <img src="/images/pages/contact/map.png" alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact