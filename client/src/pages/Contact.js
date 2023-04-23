import React, {useState} from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
        name: name.value,
        email: email.value,
        message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <>
            <section id="contact" className="section">
                <div className="container">
                    <img src="/images/pages/contact/contact-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='contact_title'>Sie haben Fragen?</h1>
                    <div className='contact_rectangle'></div>
                    <div className="contact_position">
                        <div className="position_icon"><img src="/images/pages/contact/position.png" alt="" /></div>
                        <div className='headquarters'>ZENTRALE</div>
                        <div className="position_address">
                            <h4>German Capital Pharma GmbH</h4>
                            <p>Badstr. 20 13357 Berlin, Deutschland</p>
                        </div>
                        
                    </div>
                    <div className='contact_form_wrapper'>
                        <form className='contact_form'onSubmit={handleSubmit} method="POST">
                            <div className='form_title'><span>Nehmen Sie Kontakt mit uns auf</span></div>
                            <div className='form_comment'><span>Mit * markierte Felder sind Pflichtfelder.</span></div>
                            <div className='form_department'>
                                <span className="label">An welche Abteilung möchten Sie sich wenden?</span>
                                <div className='dropdown'>
                                    <CustomDropdown name='fruit' options={[
                                    {name: 'Arzneimittelsicherheit', value: 'Arzneimittelsicherheit'},
                                    {name: 'Biometrie', value: 'Biometrie', defaultValue: true},
                                    {name: 'Info-Center', value: 'Info-Center'},
                                    {name: 'Beratung', value: 'Beratung'}
                                    ]} onChange={(e) => {console.log(e.target.value)}} style={{width: '191px'}} />
                                </div>
                            </div>
                            <div className='form_company'>
                                <div className='name'>
                                    
                                </div>
                                <div className='telephone'>
                                    
                                </div>
                            </div>
                            <div className='form_message'>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" required />
                            </div>
                            <button type="submit">asdf</button>
                        </form>
                            
                            
                            
                            
                        
                        <div className='contact_map'>
                            <img src="/images/pages/contact/map.png" alt="" />
                        </div>   
                    </div>

                    

                    
                </div>
            </section>
        </>
    )
}

export default Contact