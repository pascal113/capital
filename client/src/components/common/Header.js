import React, { useContext, useState } from 'react';
import commonContext from '../../contexts/common/commonContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { menuOpen, setMenuOpen } = useContext(commonContext);
    const { curLanguage, setLanguage } = useContext(commonContext);
    const location  = useLocation();
    const isMenuPage = (location.pathname === '/menu')?true:false;

    const changeLanguage = () => {
        let value = curLanguage;
    
        if (value === 'DE') {
            setLanguage('GB');
        } else {
            setLanguage('DE');
        }
    };

    return (
        <>
            <div className={"topbar " + (isMenuPage && "active")}>
                <div className="container">
                    <img src="/images/header/titlebar.png" alt="" className='band'/>
                    <div className="wrapper">
                        <div className="left">
                            <div className='logo'>
                                <Link to="/">
                                    <img src="/images/header/mark_dark.png" alt="mark"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="right">
                            <div id="languageBar">
                                <div className="flag">
                                    <img src={`/images/header/${curLanguage}.png`} width="22"  height="22" alt="mark"></img>
                                </div>
                                <div className='textLabel'>
                                    <span>{(curLanguage==='DE')?'Deutsch':'English'}</span>
                                </div>
                                <div className='arrow'>
                                    <img src={`/images/header/${(curLanguage==='DE')?'arrow-down':'arrow-up'}.png`} width="11"  height="7" alt="arrow" 
                                    onClick={changeLanguage}></img>
                                </div>                                
                            </div>
                            <div className="itemContainer">
                                <Link to={isMenuPage?"/":"/menu"}>
                                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen); }}>
                                        <span className="line1"></span>
                                        <span className="line2"></span>
                                        <span className="line3"></span>
                                    </div>
                                </Link>
                                <span>Menü</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;