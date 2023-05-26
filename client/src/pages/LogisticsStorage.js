import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb'
import ImageSlider from '../components/sliders/ImageSlider';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next';

const LogisticsStorage = () => {
    const { t }  = useTranslation(['page']);
    const storageData = t('logistics.storage.boxes', { returnObjects: true });

    return (
        <>
            <section id="logistics_storage" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/logistics/logistics-top.png"
                        textTop="60%"
                        fontSize="25px"
                        label={t('logistics.image_label')}
                    />
                    <BreadCrumb detail_info={t('logistics.storage.breadcrumb')} />
                    <div className='storageContainer'>
                        <h1 className='logistics_storage_title'>{t('logistics.storage.title')}</h1>
                        <div className='storage_01'>
                            <div className='logistics_storage_dash_box' />
                            <div className='logistics_storage_digit_box'>
                                <span className='digit'>{storageData[0].id}</span>
                            </div>
                            <div className='logistics_storage_description'><span>{storageData[0].description}</span></div>
                            <div className='storage_slider'>
                                <ImageSlider data={storageData[0].slider} />
                            </div>
                        </div>

                        <div className='storage_02'>
                            <div className='logistics_storage_dash_box' />
                            <div className='logistics_storage_digit_box'>
                                <span className='digit'>{storageData[1].id}</span>
                            </div>
                            <div className='logistics_storage_description'><span>{storageData[1].description}</span></div>
                            <div className='storage_slider'>
                                <ImageSlider data={storageData[1].slider} />
                            </div>
                        </div>

                        <div className='storage_03'>
                            <div className='logistics_storage_dash_box' />
                            <div className='logistics_storage_digit_box'>
                                <span className='digit'>{storageData[2].id}</span>
                            </div>
                            <div className='logistics_storage_description'><span>{storageData[2].description}</span></div>
                            <div className='storage_slider'>
                                <ImageSlider data={storageData[2].slider} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogisticsStorage
