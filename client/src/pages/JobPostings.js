import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';

const JobPostings = () => {
    return (
        <>
            <section id="job_postings" className="section">
                <div className="container">
                    <img src="/images/pages/job-postings/job-postings-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='job_postings_title'>GC Pharma GmbH als Arbeitgeber</h1>
                    <div className='job_postings_rectangle'></div>
                    <p className='job_postings_description'>Unser Mindset, Veränderungsprozessen unvoreingenommen und mutig zu begegnen, hat sich ebenso wenig verändert, wie die zentrale Verankerung des Erfolgsfaktors „Mensch“ in unserem unternehmerischen Bewusstsein. Unsere Mitarbeiter:innen sind nicht nur wegen ihrer Cleverness stets das Wichtigste unseres Unternehmens. Was die Menschen in der GC Pharma GmbH auszeichnet, ist eine unnachahmliche Mischung aus Intuition, Freude und Begeisterung.
                    </p>
                    <Link to="/">
                        <button type="button" className="base_button main_button">58 STELLEN ERKUNDEN</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default JobPostings