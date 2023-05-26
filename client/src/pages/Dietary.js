import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next';

const Dietary = () => {
    const { t }  = useTranslation(['page']);

    return (
        <>
            <section id="dietary" className="section">
                <div className="container">
                    <ImageViewer 
                        img="/images/pages/dietary/dietary-top.png"
                        textTop="60%"
                        fontSize="25px"
                        label={t('dietary.image_label')}
                    />
                    <BreadCrumb />
                    <div className='dietary_frame'>
                        <img src="/images/pages/dietary/Frame.png" alt="" />
                    </div>
                    
                    <p className='dietary_description'>Diese Unterseite wird zur Zeit aktualisiert und überarbeitet…</p>
                </div>
            </section>
        </>
    )
}

export default Dietary