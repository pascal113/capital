import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import AdviceCard from '../components/advice/AdviceCard';
import ImageSlider from '../components/sliders/ImageSlider';
import adviceData from '../data/adviceData';

const Advice = () => {
    return (
        <>
            <section id="advice" className="section">
                <div className="container">
                    <img src="./images/pages/advice/advice-top.png" alt="" />
                    <BreadCrumb />
                    <div className='advice_title'>
                        <h1>Von der Herstellung oder dem Einkauf von Arzneimitteln bis hin zur zielgruppengerechten Vermarktung unterstützen und beraten wir von GC Pharma gerne.</h1>
                        <div className='advice_rectangle'></div>
                    </div>
                    <div className="wrapper advice_wrapper">
                        <div className="advice_left_col">
                            <p className='paragraph'><strong>Ganz gleich, an welcher Stelle der Entstehung eines Arzneimittels Sie einsteigen möchten, wir bieten Ihnen das passende Angebot!</strong></p>
                            <p className='paragraph'>Die Gesundheit des Patienten steht im Mittelpunkt jeglicher pharmazeutischen Arbeit, um diese sicherzustellen, müssen Arzneimittel den unterschiedlichsten Regularien und Vorschriften gerecht werden. Wir von GC Pharma setzen uns aktiv dafür ein, dass auch Menschen im EU Ausland in den Genuss der hohen Standards unserer Medikamente kommen. Deswegen haben wir Experten für die verschiedenen Einfuhrbestimmungen einzelner Länder, vor allem der Staaten des mittleren Ostens und Nordafrikas, in unser Team aufgenommen. Sprechen Sie uns an, wir freuen uns, Sie zu beraten! Die pharmazeutische und unternehmerische Erfahrung unserer Experten von GC Pharma stellt sicher, dass wir stets passgenaue Konzepte entwickeln, die Sie als Unternehmen aktiv voranbringen und ihren Patienten die bestmögliche Qualität und Versorgung bieten. Hierfür steht uns ein Team aus IT-Management-Spezialisten, Rechtsexperten mit den Schwerpunkten Arzneimittel- und Unternehmensrecht sowie Marketingberatern jederzeit zur Seite.
                            </p>
                        </div>
                        <div className="advice_right_col">
                            <div className='border-box' />
                            <div className='slider'>
                                <ImageSlider data={adviceData.slider} />
                            </div>
                        </div>
                    </div>
                    <div className='advice_services'>
                        <span className='title'>Unser Leistungsspektrum umfasst hierbei:</span>
                        <div className='wrapper'>
                            <AdviceCard data={ adviceData.cards[0]} />
                            <AdviceCard data={ adviceData.cards[1]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advice