import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumb from '../components/common/BreadCrumb';
import Dosage from '../components/product/Dosage';
import ImageViewer from '../components/image/ImageViewer';
import { useTranslation } from 'react-i18next'
import { Fade } from 'react-awesome-reveal';

const Production = () => {
    const { t } = useTranslation(['page']);
    const dosage_01 = { id: "1", imgSrcHover: '/images/pages/production/product_btn_active_01.png', imgSrc: '/images/pages/production/product_btn_inactive_01.png' };
    const dosage_02 = { id: "2", imgSrcHover: '/images/pages/production/product_btn_active_02.png', imgSrc: '/images/pages/production/product_btn_inactive_02.png' };
    const dosage_03 = { id: "3", imgSrcHover: '/images/pages/production/product_btn_active_03.png', imgSrc: '/images/pages/production/product_btn_inactive_03.png' };
    const dosage_04 = { id: "4", imgSrcHover: '/images/pages/production/product_btn_active_04.png', imgSrc: '/images/pages/production/product_btn_inactive_04.png' };

    return (
        <>
            <section id="production" className="section">
                <div className="container">
                    <Fade duration='1000' direction='left'>
                        <ImageViewer
                            img="/images/pages/production/production-top.png"
                            textTop="60%"
                            fontSize={window.innerWidth <= 768 ? '12px' : '25px'}
                            label={t('production.image_label')}
                        />
                    </Fade>
                    <BreadCrumb />

                    <div className='production_info_wrapper'>
                        <Fade duration='1000' direction='up'>
                            <h1 className='production_title'>{t("production.title")}</h1>
                            <div className='production_rectangle'></div>
                        </Fade>
                        <div className='production_description'>
                            <img src="/images/pages/production/production-description.png" alt="" />
                            <p className='description desc_text1'>Durchführung des <br />Zulassungsprocederes</p>
                            <p className='description desc_text2'>Formulierung eigener <br />Wirkstoffe oder Generika</p>
                            <p className='description desc_text3'>Auswahl der passenden <br />Applikationsform</p>
                            <p className='description desc_text4'>Herstellung unter <br />höchsten <br />Qualitätsstandards</p>
                            <p className='description desc_text5'>Durchführung <br />klinischer Studien</p>
                            <p className='description desc_text6'>Abfüllung in Blister, Dosen, Sachets, <br />Sticks oder Flaschen</p>
                            <p className='description desc_text7'>Verpacken in Faltschachteln</p>
                            <p className='description desc_text8'>Erstellen der <br />Etikettendesigns, Druck <br />und Etikettierung</p>
                        </div>
                    </div>

                    <div className="wrapper production_wrapper">
                        <Fade duration='1000' direction='left'>
                            <div className='production_left_col'>
                                <p className='paragraph paragraph-1'>{t("production.left_p1")}</p>
                                <p className='paragraph paragraph-2'>{t("production.left_p2")}</p>
                            </div>
                        </Fade>
                        <Fade duration='1000' direction='right'>
                            <div className='production_right_col'>
                                <img src="/images/pages/production/production-1.png" alt="" />
                            </div>
                        </Fade>
                    </div>

                    <Fade duration='1000' direction='top'>
                        <h2 className='production_slogan'>{t("production.slogan_title")}</h2>
                        <div className='production_slogan_content'>
                            <p>{t("production.slogan_left")}</p>
                            <p>{t("production.slogan_right")}</p>
                        </div>
                    </Fade>

                    <div className='production_dosage_draw'>
                        <div className='production_dosage_title'>
                            <span>{t("production.dosage_title")}</span>
                        </div>
                        <div className='production_dosage_curve_lines'>
                            <img src="/images/pages/production/product_curve_line_m.png" alt="" />
                        </div>
                        <div className='production_dosage_container'>
                            <Dosage data={dosage_01} />
                            <Dosage data={dosage_02} />
                            <Dosage data={dosage_03} />
                            <Dosage data={dosage_04} />
                        </div>
                    </div>

                    <div className='production_dosage'>
                        <div className='production_dosage_title'>
                            <span>{t("production.dosage_title")}</span>
                        </div>
                        <div className='production_dosage_image'>
                            <img src="/images/pages/production/product_curve_line.png" alt="" />
                        </div>
                        <div className='production_dosage_container'>
                            <Dosage data={dosage_01} />
                            <Dosage data={dosage_02} />
                            <Dosage data={dosage_03} />
                            <Dosage data={dosage_04} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Production