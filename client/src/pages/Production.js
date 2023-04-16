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
                        <div className='production_dosage_container'>
                            <div className='production_dosage_column'>
                                <div className='subtitle'>Feste Formen</div>
                                <ul>
                                    <li><span>Brauseprodukte (Granulate, Brausetabletten)</span></li>
                                    <li><span>Globuli</span></li>
                                    <li><span>Granulate, Pellets</span></li>
                                    <li><span>Hartkapseln (pflanzlich oder mit Schweine- /Rindergelatine)</span></li>
                                    <li><span>Kautabletten</span></li>
                                    <li><span>Pastillen</span></li>
                                    <li><span>Pulver</span></li>
                                    <li><span>Suppositorien</span></li>
                                    <li><span>Tabletten (Filmtabletten, Dragees)</span></li>
                                    <li><span>Weichkapseln (mit Gelatine oder pflanzlich)</span></li>
                                    <li><span>Zytotoxica</span></li>
                                </ul>
                            </div>
                            <div className='production_dosage_column'>
                                <div className='subtitle'>Halbfeste Formen</div>
                                <ul>
                                    <li><span>Cremes</span></li>
                                    <li><span>Emulsionen und Suspensionen</span></li>
                                    <li><span>Gele</span></li>
                                    <li><span>Lotionen</span></li>
                                    <li><span>Pasten</span></li>
                                    <li><span>Salben</span></li>
                                    <li><span>Zäpfchen</span></li>
                                </ul>
                            </div>
                            <div className='production_dosage_column'>
                                <div className='subtitle'>Flüssige Formen</div>
                                <ul>
                                    <li><span>Ampullen</span></li>
                                    <li><span>Destillate</span></li>
                                    <li><span>Infusionen</span></li>
                                    <li><span>Injectabilia</span></li>
                                    <li><span>(Lyophilisierung, aseptische<br />Herstellung, terminale Sterilisation)</span></li>
                                    <li><span>Karpulen und Zylinderampullen</span></li>
                                    <li><span>orale Flüssigkeiten</span></li>
                                    <li><span>(reine Flüssigkeiten, kolloidale Flüssigkeiten)</span></li>
                                    <li><span>Säfte</span></li>
                                    <li><span>Sirupe</span></li>
                                    <li><span>Sprays</span></li>
                                    <li><span>Tinkturen</span></li>
                                    <li><span>Trinkampullen</span></li>
                                    <li><span>Tropfen</span></li>
                                    <li><span>Vials / Flaschen</span></li>
                                </ul>
                            </div>
                            <div className='production_dosage_column'>
                                <div className='subtitle'>Spezielle Formen</div>
                                <ul>
                                    <li><span>Aerosole</span></li>
                                    <li><span>Inhalatoren</span></li>
                                    <li><span>Suppositorien</span></li>
                                    <li><span>Systeme mit veränderter Wirkstofffreisetzung</span></li>
                                    <li><span>Transdermale therapeutische Systeme</span></li>
                                    <li><span>Vorgefüllte Injektionsspritzen</span></li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
        </>
    )
}

export default Production