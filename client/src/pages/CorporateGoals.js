import React from 'react'
import { Link } from "react-router-dom";

const CorporateGols = () => {
    return (
        <>
            <section id="corporate_goals" className="section">
                <div className="container">
                    <img src="./images/pages/corporate-goals-top.png" alt="" />
                    <Link to="/" className="link">
                        <span className='breadcrumb'>zurück</span>
                    </Link>
                    <div className='corporate_goals_info_wrapper'>
                        <h1 className='corporate_goals_title'>Unser Ziel: Gesundheit für das Leben.</h1>
                        <div className='corporate_goals_rectangle'></div>
                        <p className='corporate_goals_description'><strong>Wir bei GC Pharma haben es uns zur Aufgabe gemacht, den Menschen, seine Gesundheit und sein Wohlbefinden, in den Mittelpunkt unseres Handelns zu stellen. Während dieser Zustand der Gesundheit in Europa ein leicht zu erreichendes Ziel ist, mangelt es in vielen anderen Ländern an adäquater medizinischer Versorgung, um Gesundheit zu genießen.</strong> Die meisten Krankheiten der Welt sind inzwischen medikamentös behandelbar, dennoch hat ein Großteil der Menschen weltweit keinen Zugang zu diesen lebensnotwendigen Medikamenten. Diese traurige Wahrheit widerspricht dem Menschenrecht auf Gesundheitsfürsorge. Gemeinsam mit unseren Partnern und Ihnen, unseren Kunden, möchten wir dazu beitragen, an Lösungen dieses globalen Problems zu arbeiten. 
                        </p>
                    </div>
                    <div className="wrapper corporate_goals_wrapper">
                        <div className="corporate_goals_left_col">
                            <p className='paragraph'>“Gesundheit ist ein Zustand vollkommenen körperlichen, geistigen und sozialen Wohlbefindens und nicht allein das Fehlen von Krankheit und Gebrechen.“
                            </p>
                            <p className='paragraph'> Weltgesundheitsorganisation (WHO)</p>
                            <div className='border-box' />
                        </div>
                        
                        <div className="corporate_goals_right_col">
                            <p className='paragraph'>Unsere vornehmste Aufgabe sehen wir daher zum einen darin mit unseren europäischen Partnern und Kunden den Status Quo der Pharmazie zu hinterfragen. So können wir neue und bessere Wege in der Herstellung und Distribution von Arzneimitteln aufzeigen und beschreiten. Mit unseren hochwertigen Produkten und Dienstleistungen möchten wir so unseren aktiven Beitrag zu einer besseren, gesünderen Gesellschaft leisten.
                            </p>
                            <p className='paragraph'>
                            Mit ihnen möchten wir die Lebensqualität aller Menschen durch Vorbeugung, Heilung und Linderung erhöhen. Zum Anderen aber möchten wir es ermöglichen unsere hohen Qualitätsstandards im pharmazeutischen Bereich auch in andere Länder weiterzugeben. Unsere Berufung ist es, dazu beizutragen, dass Gesundheit kein Privileg bleibt, sondern für jeden Menschen erreichbar wird. Mit unserem Versprechen „Made in Germany“ garantieren wir, dass Forschung, Produktion und Qualitätssicherung in Deutschland stattfinden und unseren hohen, deutschen Wertvorstellungen entsprechen. Dieses Versprechen höchster Qualität gilt auch für unsere gesamten Handelswaren.
                            </p>
                            
                        </div>
                    </div>
                    <img src="./images/pages/corporate-goals-1.png" alt="" className='corporate_goals_img'/>
                    
                </div>
            </section>
        </>
    )
}

export default CorporateGols