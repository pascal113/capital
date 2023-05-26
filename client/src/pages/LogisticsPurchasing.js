import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
import ImageSlider from '../components/sliders/ImageSlider';
import { useTranslation } from 'react-i18next';
import ImageViewer from '../components/image/ImageViewer';

const LogisticsPurchasing = () => {
    const { t }  = useTranslation(['page']);

    const purchasingSliderData = {
        delay: 2000,
        imgWidth: '100%',
        imgHeight: 'auto',
        images: [
            "/images/pages/logistics/logistics-purchasing-1.png",
            "/images/pages/logistics/logistics-purchasing-2.png",
            "/images/pages/logistics/logistics-purchasing-3.png",
            "/images/pages/logistics/logistics-purchasing-4.png",
        ]
    };

    return (
        <>
            <section id="logistics_purchasing" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/logistics/logistics-top.png"
                        textTop="60%"
                        fontSize="25px"
                        label={t('logistics.image_label')}
                    />
                    <BreadCrumb detail_info={t('logistics.purchasing.breadcrumb')} />
                    <div className='img_map'>
                        <img src="/images/pages/logistics/logistics-purchasing-top.png" alt="" />
                    </div>
                    <h1 className='logistics_purchasing_title'>{t('logistics.purchasing.title')}</h1>
                    <p className='logistics_description'>{t('logistics.purchasing.description')}</p>
                    <div className='slider'>
                        <ImageSlider data={purchasingSliderData} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsPurchasing
