import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import { Fade } from 'react-awesome-reveal';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next';

const Dietary = () => {
    const { t } = useTranslation(['page']);

    return (
        <>
            <section id="dietary" className="section">
                <div className="container">
                    <Fade duration='3000' direction=''>
                        <ImageViewer
                            img="/images/pages/dietary/dietary-top.png"
                            textTop="60%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '25px'}
                            label={t('dietary.image_label')}
                        />
                    </Fade>
                    <BreadCrumb />

                    <Fade duration='1000'>
                        <div className='dietary_frame'>
                            <img src="/images/pages/dietary/Frame.png" alt="" />
                        </div>
                        <p className='dietary_description'>Diese Unterseite wird zur Zeit aktualisiert und überarbeitet…</p>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default Dietary