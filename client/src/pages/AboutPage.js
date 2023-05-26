import { useEffect, useContext } from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';
import CustomMultiSelect from '../components/dropdown/CustomMultiSelect';
import ImageViewer from '../components/image/ImageViewer';
import CompanyList from '../components/list/CompanyList';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/apiCalls";
import commonContext from '../contexts/common/commonContext';

const makeComboItemData = (items, language) => {
  
    let basic_data = []; 
    
    basic_data = [
        {
            "name" : "",
            "value" : "",
            "defaultValue": true
        }
    ];

    if(items !== undefined) {
        items.forEach((item, index) => {
            let tmpData = {};
            tmpData.value = item.id;
            if(language === 'GB') {
                tmpData.name = item.name_gb;
            }
            else {
                tmpData.name = item.name_de;
            }
            
            // if(index === 0) {
            //     tmpData.defaultValue = true;
            // }
            // else {
            //     tmpData.defaultValue = false;
            // }
            tmpData.defaultValue = false;      
    
            basic_data.push(tmpData);
        });
    }
    // else {
    //     basic_data = [
    //         {
    //             "name" : "Vollzeit JSON",
    //             "value" : "1",
    //             "defaultValue": true
    //         }
    //     ];
    // }

    return basic_data;
};

const makeMultiItemData = (items, language) => {
  
    let basic_data = [];

    if(items !== undefined) {
        items.forEach((item, index) => {
            let tmpData = {};
            tmpData.id = tmpData.value = item.id;
            if(language === 'GB') {
                tmpData.name = item.name_gb;
            }
            else {
                tmpData.name = item.name_de;
            }     
    
            basic_data.push(tmpData);
        });
    }

    return basic_data;
};

const AboutPage = () => {
    
    const { t }  = useTranslation(['page']);

    const dispatch = useDispatch();
    // const jobsData = useSelector((state) => state.job);
    const {jobsData, typesData, locationsData, fieldsData }  = useSelector(state => ({
        jobsData : state.job.jobs,
        typesData : state.job.types,
        locationsData : state.job.locations,
        fieldsData : state.job.fields,
    }));

    const { curLanguage } = useContext(commonContext);

    // const type_options = t('about_us.type', { returnObjects: true });
    // const location_options = t('about_us.location', { returnObjects: true });
    // const activity_options = t('about_us.activity', { returnObjects: true });

    // const type_options = makeComboItemData(jobsData.types, curLanguage);
    // const location_options = makeComboItemData(jobsData.locations, curLanguage);
    // const activity_options = makeMultiItemData(jobsData.fields, curLanguage);

    const type_options = makeComboItemData(typesData, curLanguage);
    const location_options = makeComboItemData(locationsData, curLanguage);
    const activity_options = makeMultiItemData(fieldsData, curLanguage);
       
    useEffect(() => {
        console.log('AboutPage get jobs, types, locations, fields');
        // getTypes(dispatch);
        // getLocations(dispatch);
        // getFields(dispatch);
        getJobs([], dispatch);

        // type_options = makeComboItemData(jobsData.types, curLanguage);
        // location_options = makeComboItemData(jobsData.locations, curLanguage);
        // activity_options = makeMultiItemData(jobsData.fields, curLanguage);
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { job_type_select, location_select, activity_select } = e.target.elements;
        
        let details = {
            type: job_type_select.value,
            location: location_select.value,
            field: activity_select.value,
            language: curLanguage
        };
        console.log('value', details);

        getJobs(details, dispatch);
    };

    return (
        <>
            <section id="about_us" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/about-us/about-us-page-top.png"
                        textTop="65%"
                        fontSize="25px"
                        label="HUMAN RESOURCES MANAGER" 
                    />
                    <BreadCrumb />
                    <div className='about_wrapper'>
                        <form className='search_form' onSubmit={handleSubmit} method="POST">
                            <p className='form_search_label'><span>{t('about_us.form_search_label')}</span></p>
                            <div className='form_job_type'>
                                <p className='form_search_label'><span>{t('about_us.form_type_label')}</span></p>
                                <div className='job_type_select' >
                                    <CustomDropdown name='job_type_select' options={type_options} 
                                    onChange={(e) => {console.log(e.target.value)}} 
                                    style={{width: '100%', padding: '8px 0px 5px 13px', fontSize: 16}} />
                                </div>
                            </div>

                            <div className='form_location'>
                                <p className='form_search_label'><span>{t('about_us.form_location_label')}</span></p>
                                <div className='location_select' >
                                    <CustomDropdown name='location_select' options={location_options} 
                                    onChange={(e) => {console.log(e.target.value)}} 
                                    style={{width: '100%', padding: '8px 0px 5px 13px', fontSize: 16}} />
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