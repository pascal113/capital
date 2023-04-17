import React from 'react'
import { Link } from "react-router-dom";

const CompanyProfile = () => {
    return (
        <>
            <section id="company_profile" className="section">
                <div className="container">
                    <img src="./images/pages/company-profile-top.png" alt="" />
                    <Link to={-1} className="link">
                        <span className='breadcrumb'>zurück</span>
                    </Link>
                    <div className='company_profile_info_wrapper'>
                        <h1 className='company_profile_title'>GC Pharma GmbH</h1>
                        <div className='company_profile_rectangle'></div>
                        <p className='company_profile_description'>GC Pharma ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren.
                        </p>
                    </div>
                    <div className="wrapper company_profile_wrapper">
                        <div className="company_profile_left_col">
                            <p className='paragraph'>Unseren Schwerpunkt setzen wir dabei auf dem Angebot zertifizierter Dienstleistungen und Produkte entlang einer mit dem Kunden abgestimmten Prozess-Schnittstelle aus einer Hand. Somit können wir in jedem Bereich herausragende Qualität garantieren. Mit unseren Partnern, Lieferanten und Herstellern bilden wir ein leistungsstarkes Netzwerk, das Medikamente höchster europäischer Qualität exportiert, damit wir unserem Traum von umfassender Gesundheit für alle Menschen ein Stück näher kommen. Mit unseren Partnern, Lieferanten und Herstellern bilden wir ein leistungsstarkes Netzwerk, das Medikamente höchster europäischer Qualität exportiert, damit wir unserem Traum von umfassender Gesundheit für alle ein Stück näher kommen.
                            </p>
                        </div>
                        <div className="company_profile_right_col">
                            <img src="./images/pages/company-profile-1.png" alt="" />
                            <div className='border-box'>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyProfile