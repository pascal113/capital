import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb';
import { Link, useParams } from "react-router-dom";
import ImageViewer from '../components/image/ImageViewer';
import SelectUploadFile from '../components/upload/SelectUploadFile';
import aboutCompanyData from '../data/aboutCompanyData';

const ApplyPage = () => {
    const { id } = useParams();
    const id_num = parseInt(id);
    let clearChildState = null;
    const cur_sel_files = ["Keine Datei ausgewählt", "Keine Datei ausgewählt", "Keine Datei ausgewählt"];
    
    const imgViwerData = {
        img: "/images/pages/about-us/about-company-top.png",
        label: "People are the power to success",
        textTop: '105px',
        fontSize: '30px',
        fontFamily: 'Din Pro Bold',
        textColor: 'white',
    };

    const assignClearChildState = (childClearStateFunc) =>{
        clearChildState = childClearStateFunc;
    };

    const getStateCallback = (fileName) => {
        //do something to use the child state
    };

    const handleRest = e => {
        //clearChildState(); 
        alert('asdfasdf');
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
                                <div className='apply-upload-section'>
                                    <div className='apply-upload-label'>
                                        <span className='label'>DEIN ANSCHREIBEN/</span>
                                        <span className='label'>LEBENSLAUF*:</span>
                                    </div>
                                    <SelectUploadFile getState={getStateCallback} passClearStateFunc={handleRest}/>
                                </div>
                                <div className='apply-upload-section'>
                                    <div className='apply-upload-label'>
                                        <span className='label'>DEINE ZEUGNISSE*:</span>
                                        <span className='label-small'>ZERTIFIKATE/ SCHULZEUGNISSE</span>
                                    </div>
                                    <SelectUploadFile />
                                </div>
                                <div className='apply-upload-section'>
                                    <span className='label'>WEITERE DOKUMENTE*:</span>
                                    <SelectUploadFile />
                                </div>
                                
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
                                <div className='radio-box-section'>
                                    <input type="radio" name="radio-box" id="radio-box" className="custom-radio"/>
                                    <span className='radio-label'>Ja</span>
                                    <span className='radio-comment'>Ich bin damit einverstanden, dass meine Bewerbung zur Prüfung für weitere Stellenangebote an andere Fachbereiche bzw. Haufe-Gesellschaften übermittelt wird (dies gilt ausschl. für die vier Monate nach Abschluss meines Bewerbungsverfahrens). Diese Einwilligung kann ich jederzeit ohne Angabe von Gründen mit Wirkung für die Zukunft widerrufen.
                                    </span>
                                </div>
                                <div className='radio-box-section'>
                                    <input type="radio" name="radio-box" id="radio-box" className="custom-radio"/>
                                    <span className='radio-label'>Nein</span>
                                    <span className='radio-comment'>Ich bin nicht damit einverstanden, dass meine Bewerbung zur Prüfung für weitere Stellenangebote an andere Fachbereiche bzw. Haufe-Gesellschaften übermittelt wird. Das bedeutet, dass meine Bewerbung nur von dem Fachbereich bzw. der Haufe-Gesellschaft berücksichtigt wird, die für dieses Stellenangebot zuständig ist.
                                    </span>
                                </div>
                            </div>
                            <div className='form_control agree-policy'>
                                <span className='label'>Bitte bestätigen*:</span>
                                <a target="_blank" href="https://www.gc-pharma.de/de/datenschutzerklaerung.html" className='link-apply'>Zur Datenschutzerklärung</a>
                                <div className='check-box-section'>
                                    <input type="checkbox" name="check-box" id="check-box" className="custom-check" />
                                    <span className='check-label'>Ich bin mit der Datenschutzerklärung einverstanden</span>
                                </div>        
                            </div>
                            <div className='apply-button-range'>
                                <button type="reset" className="apply_interrupt_button" onClick={handleRest}>Abbrechen</button>
                                <button type="submit" className="base_button apply_submit_button">Bewerbung einreichen</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplyPage