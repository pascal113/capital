import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
import ImageSlider from '../components/sliders/ImageSlider';
import logisticsData from '../data/logisticsData';

const LogisticsShipment = () => {

    const shipmentData = logisticsData.shipment;

    return (
        <>
            <section id="logistics_purchasing" className="section">
                <div className="container">
                    <div className='img_top'>
                        <img src="./images/pages/logistics/logistics-top.png" alt="" />
                    </div>
                    <BreadCrumb detail_info="LOGISTIK &gt; EINKAUF" />
                </div>
            </section>
        </>
    )
}

export default LogisticsShipment
