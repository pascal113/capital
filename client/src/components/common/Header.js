import React, { useContext, useState } from 'react';
import commonContext from '../../contexts/common/commonContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { menuOpen, setMenuOpen } = useContext(commonContext);
    const { curLanguage, setLanguage } = useContext(commonContext);
    const location  = useLocation();
    const isMenuPage = (location.pathname === '/menu')?true:false;

    return (
        <>
            <div className={"topbar " + (isMenuPage && "active")}>
                <div className="container">
                    <div className='band'>
                        <img src="./images/header/titlebar.png" alt="" />
                    </div>
                    <div className="wrapper">
                        <div className="left">
                            <div className='logo'>
                                <Link to="/">
                                    <img src="/images/header/mark_dark.png" alt="mark"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="right">
                            <div className="itemContainer">
                                <div className="icon">
                                    <img src={`/images/header/${curLanguage}.png`} width="22"  height="22" alt="mark"></img>
                                </div>
                                <span>{(curLanguage==='DE')?'Deutsch':'English'}</span>
                                <i className={(curLanguage==='DE')?'arrow':'arrow arrow-up'} onClick={()=>{setLanguage((curLanguage==='DE')?'GB':'DE')}}></i>
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