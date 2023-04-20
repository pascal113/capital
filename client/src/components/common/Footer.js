import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { footMenu } from '../../data/footerData';

const Footer = () => {

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
                                footMenu.map(item => {
                                    const { id, title, menu } = item;
                                    return (
                                        <div className="foot_menu" key={id}>
                                            <h4>{title}</h4>
                                            <ul>
                                                {
                                                    menu.map(item => {
                                                        const { id, link, path } = item;
                                                        return (
                                                            <li key={id}>
                                                                <Link to={path}>{link}</Link>
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