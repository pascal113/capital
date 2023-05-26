import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
import { useTranslation } from 'react-i18next';
import ImageViewer from '../components/image/ImageViewer';

const LogisticsShipment = () => {
    const { t }  = useTranslation(['page']);
    const shipmentData = t('logistics.shipment.boxes', { returnObjects: true });

    return (
        <>
            <section id="logistics_shipment" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/logistics/logistics-top.png"
                        textTop="60%"
                        fontSize="25px"
                        label={t('logistics.image_label')}
                    />
                    <BreadCrumb detail_info={t('logistics.shipment.breadcrumb')} />
                    <h1 className='logistics_shipment_title'>{t('logistics.shipment.title')}</h1>
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
