import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';

const AboutPage = () => {
    return (
        <>
            <section id="about_us" className="section">
                <div className="container">
                    <img src="/images/pages/about-us/about-us-page-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='job_postings_title'>GC Pharma GmbH als Arbeitgeber</h1>
                    
                </div>
            </section>
        </>
    )
}

export default AboutPage