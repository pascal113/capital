import React from 'react'
import { Link } from "react-router-dom";

const Production = () => {
    return (
        <>
            <section id="production" className="section">
                <div className="container">
                    <img src="./images/pages/production-top.png" alt="" />
                    <Link to="/" className="link">
                        <span className='breadcrumb'>zurück</span>
                    </Link>
                    <h1 className='production_title'>Unsere Leistungen im Überblick</h1>
                    <div className='production_rectangle'></div>
                    <div className='production_description'>
                        <img src="./images/pages/production-description.png" alt="" />
                    </div>
                    <div className="wrapper production_wrapper">
                        <div className='production_left_col'>
                            <p className='paragraph paragraph-1'>Gemeinsam mit unseren qualifizierten Partnern aus Forschung und Produktion können wir Ihnen einen kompletten Full-Service für Ihre Produkte bieten. </p>
                            <p className='paragraph paragraph-2'>Gerne unterstützen wir Sie bei der Formulierung eigener Wirkstoffe oder Generika, beraten Sie bei der Auswahl der geeigneten Applikationsformen für Ihre Patienten. Selbstverständlich übernehmen unsere Partner auch gerne die gesamte Produktion für Sie. Da der gesamte Herstellungsprozess bei unseren Partnern je nach Arzneiform in Räumen der Reinheitsklasse B (unter  Laminar Airflow A in B), mit abschließender Sterilisation mittels Autoklav im Endbehältnis stattfinden kann, können Sie sich in jeder Hinsicht auf höchste pharmazeutische Qualitäts- und Hygienestandards verlassen. Neben den Richtlinien des Europäischen Arzneibuches und des EU-GMP-Leitfadens (Good Manufacturing Practices), entsprechen die Labore den zahlreichen nationalen und internationalen Normen und Richtlichen, die sich mit der Herstellung und den hierfür notwendigen Räumlichkeiten befassen.</p>
                        </div>
                        <div className='production_right_col'>
                            <img src="./images/pages/production-1.png" alt="" />
                        </div>
                    </div>
                    <h2 className='production_slogan'>Unsere erfahrenen Experten beraten Sie gerne bei der Wahl<br />
                        der richtigen Applikationsform für Ihren Zielmarkt und Zielgruppe. 
                    </h2>
                    <div className='production_slogan_content'>
                        <p>Die Wahl der herzustellenden Arzneiform bleibt dabei jedoch ganz Ihnen überlassen. Die modernen Produktionsanlagen befinden sich auf dem neuesten technischen Stand und erlauben so die qualitativ hochwertige und effiziente Herstellung vielfältigster Arzneiformen: von festen, oral zu applizierenden Medikamenten, wie Tabletten und Kapseln, bis hin zu halbfesten oder flüssigen Formen, wie Cremes oder Infusionen, können wir alle gängigen Arzneiformen auch in großen Chargen für Sie herstellen.
                        </p>
                        <p>Sollte es uns und unseren Partnern nicht möglich sein, eine von Ihnen benötigte Darreichungsform zu produzieren, stellen wir Ihnen gerne den Kontakt zu führenden Herstellern her. Dies ermöglicht es Ihnen, verschiedene Produkte binnen kürzester Zeit aus einer Hand zu empfangen, flexibel auf die Wünsche Ihrer Kunden zu reagieren und sich der optimalen Qualität Ihrer Medikamente jederzeit sicher sein zu können.
                        </p>
                    </div>
                    <div className='production_dosage'>
                        <span>Folgende Darreichungsformen können wir Ihnen anbieten:</span>
                    </div>
                    <div className='production_dosage_draw'>
                        <img src="./images/pages/product_curve_line.png" alt="" className='production_dosage_curve_lines'/>
                    </div>              
                </div>
            </section>
        </>
    )
}

export default Production