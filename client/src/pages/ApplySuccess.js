import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import ImageViewer from '../components/image/ImageViewer';

const ApplySuccess = () => {
    
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
                    <div className='apply_success_wrapper'>
                    <div className='send-image'>
                        <img src="/images/pages/about-us/about-us-send.png" alt="" />
                    </div>   
                    <div className='title'><h1>Vielen Dank für die Zusendung Ihrer Bewerbungsunterlagen!</h1></div>
                    <div className='comment'><span >Wir freuen uns über Ihr Interesse an einer Beschäftigung in unserem Unternehmen. Nach Prüfung Ihrer Unterlagen werden wir uns wieder mit Ihnen in Verbindung setzen. Bis dahin bitten wir um Ihre Geduld.</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplySuccess