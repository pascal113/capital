import React from 'react'
import { Link } from "react-router-dom";
import LogisticsCard from '../components/logistics/LogisticsCard';
import logisticsData from '../data/logisticsData';

const LogisticsPage = () => {

    return (
        <>
            <section id="logistics" className="section">
                <div className="container">
                    <img src="./images/pages/logistics/logistics-top.png" alt="" />
                    <Link to={-1} className="link">
                        <span className='breadcrumb'>zurück</span>
                    </Link>
                    <h1 className='logistics_title'>Unsere Spezialisten in Einkauf und Vertrieb können Ihnen schnell, <br />
                    kompetent und zuverlässig weiterhelfen.</h1>
                    <div className='logistics_rectangle'></div>
                    <p className='logistics_description'>Durch unser europaweites Netzwerk an Herstellern, Lieferanten und Großhandlungen sind wir von GC Pharma in der Lage, innerhalb kürzester Zeit den Bedarf an nahezu allen in Europa zugelassenen Humanarzneimitteln zu decken.
                    </p>
                    <div className='logistics_wrapper'>
                        <LogisticsCard props={logisticsData.cards[0]}></LogisticsCard>
                        <LogisticsCard props={logisticsData.cards[1]}></LogisticsCard>
                        <LogisticsCard props={logisticsData.cards[2]}></LogisticsCard>
                    </div>
                    <div className='logistics_slogan'>
                        <img src="./images/pages/logistics/logistics-slogan.png" alt="" />
                        <p className='logistics_slogan_content'>
                            <blockquote >Mit unserem europaweiten Netzwerk an Herstellern und Lieferanten sind wir in der Lage, innerhalb kürzester Zeit den Bedarf an vielen Humanarzneimitteln zu decken. </blockquote>
                        </p>
                    </div>
                    <div className='logistics_contact_wrapper'>
                        <div className='contact_left_column'>
                            <p className='contact_title'>
                                <span>Benötigen Sie  Fertigarzneimittel aus dem Europäischen Wirtschaftsraum? </span>
                            </p>
                            <p className='contact_content'>
                                <span>Sprechen Sie uns an! Unsere Spezialisten in Einkauf und Vertrieb können Ihnen schnell, kompetent und zuverlässig weiterhelfen</span>
                            </p>
                            <Link to="/contacts">
                                <button type="button" className="base_button contact_button">Sprechen Sie uns an!</button>
                            </Link>
                        </div>
                        <div className='contact_right_column'>
                            <img src="./images/pages/logistics/logistics_map.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsPage
