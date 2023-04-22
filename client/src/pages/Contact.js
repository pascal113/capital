import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import CustomDropdown from '../components/dropdown/CustomDropdown';

const Contact = () => {
    return (
        <>
            <section id="contact" className="section">
                <div className="container">
                    <img src="/images/pages/contact/contact-top.png" alt="" />
                    <BreadCrumb />
                    <h1 className='contact_title'>Sie haben Fragen?</h1>
                    <div className='contact_rectangle'></div>
                    <p className='contact_description'>Unser Mindset, Veränderungsprozessen unvoreingenommen und mutig zu begegnen, hat sich ebenso wenig verändert, wie die zentrale Verankerung des Erfolgsfaktors „Mensch“ in unserem unternehmerischen Bewusstsein. Unsere Mitarbeiter:innen sind nicht nur wegen ihrer Cleverness stets das Wichtigste unseres Unternehmens. Was die Menschen in der GC Pharma GmbH auszeichnet, ist eine unnachahmliche Mischung aus Intuition, Freude und Begeisterung.
                    </p>

                    <CustomDropdown name='fruit' options={[
                        {name: 'Arzneimittelsicherheit', value: 'Arzneimittelsicherheit'},
                        {name: 'Biometrie', value: 'Biometrie', defaultValue: true},
                        {name: 'Info-Center', value: 'Info-Center'},
                        {name: 'Beratung', value: 'Beratung'}
                    ]} onChange={(e) => {console.log(e.target.value)}} style={{width: '20em'}} />

                    <div>
                        asdfasdfasdfasdfasdfasdf<br />
                        asdfasdfasdfasdfasdfasdf<br />
                        asdfasdfasdfasdfasdfasdf<br />
                        asdfasdfasdfasdfasdfasdf<br />
                        asdfasdfasdfasdfasdfasdf<br />
                        asdfasdfasdfasdfasdfasdf<br />
                        asdfasdfasdfasdfasdfasdf<br />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact