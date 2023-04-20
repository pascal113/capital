import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
import ImageSlider from '../components/sliders/ImageSlider';
import logisticsData from '../data/logisticsData';

const LogisticsPurchasing = () => {

    return (
        <>
            <section id="logistics_purchasing" className="section">
                <div className="container">
                    <div className='img_top'>
                        <img src="./images/pages/logistics/logistics-top.png" alt="" />
                    </div>
                    <BreadCrumb detail_info="LOGISTIK &gt; EINKAUF" />
                    <div className='img_map'>
                        <img src="./images/pages/logistics/logistics-purchasing-top.png" alt="" />
                    </div>
                    <h1 className='logistics_purchasing_title'>Benötigen Sie Fertigarzneimittel aus dem<br />Europäischen Wirtschaftsraum? </h1>
                    <p className='logistics_description'>Mit unserem europaweiten Netzwerk an Herstellern und Lieferanten sind wir in der Lage, innerhalb kürzester Zeit den Bedarf an vielen Humanarzneimitteln zu decken.Sprechen Sie uns an! Unsere Spezialisten in Einkauf und Vertrieb können Ihnen schnell, kompetent und zuverlässig weiterhelfen. Durch unser europaweites Netzwerk an Herstellern, Lieferanten und Großhandlungen sind wir von GC Pharma in der Lage, innerhalb kürzester Zeit den Bedarf an nahezu allen in Europa zugelassenen Humanarzneimitteln zu decken.
                    </p>
                    <div className='slider'>
                        <ImageSlider data={logisticsData.purchasing_silder} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsPurchasing
