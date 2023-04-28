import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import { Link, useParams } from "react-router-dom";
import ImageViewer from '../components/image/ImageViewer';
import aboutCompanyData from '../data/aboutCompanyData';

const ApplyPage = () => {
    const { id } = useParams();
    const id_num = parseInt(id);
    
    const imgViwerData = {
        img: "/images/pages/about-us/about-company-top.png",
        label: "People are the power to success",
        textTop: '105px',
        fontSize: '30px',
        fontFamily: 'Din Pro Bold',
        textColor: 'white',
    };

    return (
        <>
            <section id="apply" className="section">
                <div className="container">
                    <ImageViewer data={imgViwerData} />
                    <BreadCrumb />
                    <div className='apply_wrapper'>
                        <div className='title'><h1>HUMAN RECOURCES MANAGER  (VOLLZEIT)</h1></div>
                        <div className='comment'><span >Bitte erfasse im Folgenden deine persönlichen Informationen.</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplyPage