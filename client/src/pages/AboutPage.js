import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';
import CustomMultiSelect from '../components/dropdown/CustomMultiSelect';

const AboutPage = () => {

    const activityDatas = [
        'Oliver Hansen',
        'Berlin',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];



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
                            <p className='form_search_label'><span>SUCHE</span></p>
                            
                            <div className='form_job_type'>
                                <p className='form_search_label'><span>ART:</span></p>
                                <div className='job_type_select' >
                                    <CustomDropdown name='job_type_select' options={[
                                    {name: 'Arzneimittelsicherheit', value: 'Arzneimittelsicherheit'},
                                    {name: 'Biometrie', value: 'Biometrie'},
                                    {name: 'Info-Center', value: 'Info-Center'},
                                    {name: 'Beratung', value: 'Beratung'}
                                    ]} onChange={(e) => {console.log(e.target.value)}} style={{width: '100%', padding: '8px 0px 5px 13px', fontSize: 14}} />
                                </div>
                            </div>

                            <div className='form_location'>
                                <p className='form_search_label'><span>STANDORT:</span></p>
                                <div className='location_select' >
                                    <CustomDropdown name='location_select' options={[
                                    {name: 'Berlin', value: 'Berlin', defaultValue: true},
                                    {name: 'Hamburg', value: 'Hamburg'},
                                    {name: 'München', value: 'München'},
                                    {name: 'Köln', value: 'Köln'}
                                    ]} onChange={(e) => {console.log(e.target.value)}} style={{width: '100%', padding: '8px 0px 5px 13px', fontSize: 14}} />
                                </div>
                            </div>

                            <div className='form_activity'>
                                <p className='form_search_label'><span>TÄTIGKEITSBEREICH:</span></p>
                                <div className='multi_select'>
                                    <CustomMultiSelect name='activity_select' options={activityDatas}></CustomMultiSelect>
                                </div>
                            </div>                            
                            <button type="submit" className="base_button form_search_button"><span>SUCHEN</span><i className="fa fa-search" style={{ fontSize:18}}></i></button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage