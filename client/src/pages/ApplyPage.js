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

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*const { job_type_select, location_select, activity_select } = e.target.elements;
        
        let details = {
            job_type: job_type_select.value,
            location: location_select.value,
            activity: activity_select.value,
        };
        console.log('value', details);*/
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
                        <form className='apply_form' onSubmit={handleSubmit} method="POST">
                            <div className='form_control'>
                                <span className='label'>VORNAME*:</span>
                                <input name="firstname" type="text" placeholder="Pflichtangabe" required />
                            </div>
                            <div className='form_control'>
                                <span className='label'>NACHNAME*:</span>
                                <input name="lastname" type="text" placeholder="Pflichtangabe" required />
                            </div>
                            <div className='form_control'>
                                <span className='label'>E-MAIL LOGIN*:</span>
                                <input name="email" type="email" placeholder="Pflichtangabe" required />
                                <span className='label_comment'>Gib hier deine E-Mail Adresse ein.</span>
                            </div>
                            <div className='form_control'>
                                <span className='label'>TELEFONNUMMER*:</span>
                                <input name="phone" type="tel" placeholder="Pflichtangabe" required pattern="^[ +0-9]*$"/>
                                <span className='label_comment'>Bitte hinterlege deine Telefonnummer in folgendem Format, z.B. +49 170 1234567 (als Bsp. für eine deutsche Mobilfunknummer).</span>
                            </div>

                            <div className='form_control'>
                                <span className='label'>DEIN FRÜHSTMÖGLICHER EINTRITTSTERMIN*:</span>
                                <input name="entry_date" type="text" placeholder="Pflichtangabe" required pattern="^(1[0-2]|0?[1-9])/(3[01]|[12][0-9]|0?[1-9])/(?:(?:19|20)[0-9]{2})$"/>
                                <span className='label_comment'>Bitte hinterlege deine eintrittstermin in folgendem Format, z.B. 1/25/2023</span>
                            </div>
                            <div className='form_control'>
                                <span className='label'>DEINE GEHALTSVORSTELLUNGEN:</span>
                                <input name="salary" type="text" placeholder="(optional)" />
                            </div>
                            <div className='form_control'>
                                <span className='label'>WIE BIST DU AUF UNS AUFMERKSAM GEWORDEN:</span>
                                <input name="aware" type="text" placeholder="(optional)" />
                            </div>
                            <div className='form_control'>
                                <span className='label'>WEITERGABE DEINER BEWERBUNG*:</span>
                                <div className='chk_section'>
                                    <input type="radio" name="styles" id="yes" class="custom-radio"/>
                                    <small className='label_comment'>Ja</small>
                                    <small className='label_comment'>Ich bin damit einverstanden, dass meine Bewerbung zur Prüfung für weitere Stellenangebote an andere Fachbereiche bzw. Haufe-Gesellschaften übermittelt wird (dies gilt ausschl. für die vier Monate nach Abschluss meines Bewerbungsverfahrens). Diese Einwilligung kann ich jederzeit ohne Angabe von Gründen mit Wirkung für die Zukunft widerrufen. 
                                    </small>
                                </div>
                                <div className='chk_section'>
                                    <input type="radio" name="styles" id="no" class="custom-radio"/>
                                    <small className='label_comment'>Nein</small>
                                    <small className='label_comment'>Ich bin damit einverstanden, dass meine Bewerbung zur Prüfung für weitere Stellenangebote an andere Fachbereiche bzw. Haufe-Gesellschaften übermittelt wird (dies gilt ausschl. für die vier Monate nach Abschluss meines Bewerbungsverfahrens). Diese Einwilligung kann ich jederzeit ohne Angabe von Gründen mit Wirkung für die Zukunft widerrufen. 
                                    </small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplyPage