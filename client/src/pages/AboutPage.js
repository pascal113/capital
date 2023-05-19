import { useEffect } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';
import CustomMultiSelect from '../components/dropdown/CustomMultiSelect';
import CompanyList from '../components/list/CompanyList';
import { useTranslation } from 'react-i18next';

import aboutData from "../data/aboutData";

import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/apiCalls";

const AboutPage = () => {
    
    const { t }  = useTranslation(['page']);

    const type_options = t('about_us.type', { returnObjects: true });
    const location_options = t('about_us.location', { returnObjects: true });
    const activity_options = t('about_us.activity', { returnObjects: true });

    const dispatch = useDispatch();
    const jobsData = useSelector((state) => state.job.jobs);
       
    useEffect(() => {
        console.log('AboutPage useEffect');
        getJobs(dispatch);
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { job_type_select, location_select, activity_select } = e.target.elements;
        
        let details = {
            job_type: job_type_select.value,
            location: location_select.value,
            activity: activity_select.value,
        };
        console.log('value', details);
    };

    return (
        <>
            <section id="about_us" className="section">
                <div className="container">
                    <img src="/images/pages/about-us/about-us-page-top.png" alt="" />
                    <BreadCrumb />
                    <div className='about_wrapper'>
                        <form className='search_form' onSubmit={handleSubmit} method="POST">
                            <p className='form_search_label'><span>{t('about_us.form_search_label')}</span></p>
                            <div className='form_job_type'>
                                <p className='form_search_label'><span>{t('about_us.form_type_label')}</span></p>
                                <div className='job_type_select' >
                                    <CustomDropdown name='job_type_select' options={type_options} 
                                    onChange={(e) => {console.log(e.target.value)}} 
                                    style={{width: '100%', padding: '8px 0px 5px 13px', fontSize: 14}} />
                                </div>
                            </div>

                            <div className='form_location'>
                                <p className='form_search_label'><span>{t('about_us.form_location_label')}</span></p>
                                <div className='location_select' >
                                    <CustomDropdown name='location_select' options={location_options} 
                                    onChange={(e) => {console.log(e.target.value)}} 
                                    style={{width: '100%', padding: '8px 0px 5px 13px', fontSize: 14}} />
                                </div>
                            </div>

                            <div className='form_activity'>
                                <p className='form_search_label'><span>{t('about_us.form_activity_label')}</span></p>
                                <div className='multi_select'>
                                    <CustomMultiSelect name='activity_select' options={activity_options}></CustomMultiSelect>
                                </div>
                            </div>                            
                            <button type="submit" className="base_button form_search_button"><span>{t('about_us.form_search_label')}</span><i className="fa fa-search" style={{ fontSize:18}}></i></button>
                        </form>
                        <CompanyList className="companyList" companyList={jobsData}></CompanyList>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage