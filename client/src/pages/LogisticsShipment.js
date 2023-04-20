import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
import logisticsData from '../data/logisticsData';

const LogisticsShipment = () => {

    const shipmentData = logisticsData.shipment;

    return (
        <>
            <section id="logistics_shipment" className="section">
                <div className="container">
                    <div className='img_top'>
                        <img src="/images/pages/logistics/logistics-top.png" alt="" />
                    </div>
                    <BreadCrumb detail_info="LOGISTIK &gt; VERSAND" />
                    
                    <h1 className='logistics_shipment_title'>Das sind die vier wichtigen Versand-Fakten <br />der GC Pharma GmbH</h1>
                    <div className='logistics_shipment_button_range'>
                        { shipmentData.map((item) => {
                            return (
                                <Link key={item.id} to={`/logistics-shipment-details/${item.id}`}>
                                    <div className={`logistics_shipment_digit_box box${item.id}`}><span className='digit'>{item.id}</span></div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsShipment
