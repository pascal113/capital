import React, {useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
//import logisticsData from '../data/logisticsData';
import { useTranslation } from 'react-i18next';

const LogisticsShipmentDetails = () => {

    const { id } = useParams();
    const id_num = parseInt(id);
    //const shipmentData = logisticsData.shipment.filter(item => (item.id === id_num));
    const { t }  = useTranslation(['page']);
    const shipmentData = t('logistics.shipment.boxes', { returnObjects: true }).filter(item => (item.id === id_num));

    return (
        <>
            <section id="logistics_shipment_details" className="section">
                <div className="container">
                    <div className='img_top'>
                        <img src="/images/pages/logistics/logistics-top.png" alt="" />
                    </div>
                    <BreadCrumb detail_info={t('logistics.shipment.breadcrumb')} />
                    {
                        shipmentData.length > 0 && (
                            <div className='logistics_shipment_details_wrapper'>
                                <Link to={-1} className="link">
                                    <div className={`logistics_shipment_digit_box box${id}`}>
                                        <span className='digit'>{shipmentData[0].id}</span>
                                    </div>
                                </Link>
                                <div className={`logistics_shipment_detail_description desc${id}`}>
                                    <span>{shipmentData[0].description}</span>
                                </div>
                                <div className={`logistics_shipment_detail_image img${id}`}>
                                    <img src={shipmentData[0].image} alt="" />
                                </div>
                                <div className={`logistics_shipment_dash_box dash${id}`}></div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default LogisticsShipmentDetails
