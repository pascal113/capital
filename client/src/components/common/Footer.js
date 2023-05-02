import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { footMenu } from '../../data/footerData';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

const Footer = () => {
    const { t }  = useTranslation(['page']);
    const location  = useLocation();
    const isMenuPage = (location.pathname === '/menu')?true:false;

    return (
        <>
        {
            !isMenuPage && (
                <footer id="footer">
                    <div className="container">
                        <div className="wrapper footer_wrapper">
                            <div className="foot_mark">
                                <img src="/images/mark/mark_light.png" alt="product-img" />
                            </div>

                            {
                                t('footer', { returnObjects: true }).map((item, index) => {
                                    const { title, sub_title } = item;
                                    return (
                                        <div className="foot_menu" key={index}>
                                            <h4>{t(title)}</h4>
                                            <ul>
                                                {
                                                    sub_title.map((subitem, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {subitem}
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </footer >
            )
        }
        </>
        
    );
};

export default Footer;