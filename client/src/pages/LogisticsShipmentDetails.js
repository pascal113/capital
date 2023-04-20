import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
import logisticsData from '../data/logisticsData';

const LogisticsShipmentDetails = () => {

    const { id } = useParams();
    const id_num = parseInt(id);
    const shipmentData = logisticsData.shipment.filter(item => (item.id === id_num));

    return (
        <>
            <section id="logistics_shipment_details" className="section">
                <div className="container">
                    <div className='img_top'>
                        <img src="/./images/pages/logistics/logistics-top.png" alt="" />
                    </div>
                    <BreadCrumb detail_info="LOGISTIK &gt; VERSAND" />
                    <div className='logistics_shipment_details_wrapper'>
                        <div className='logistics_shipment_dash_box' />
                        <div className={`logistics_shipment_digit_box box${id}`}>
                            <span className='digit'>{id}</span>
                        </div>
                        <div className={`logistics_shipment_detail_description desc${id}`}>
                            <span>{shipmentData[0].description}</span>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default LogisticsShipmentDetails
