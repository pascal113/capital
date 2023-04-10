import React, { useContext, useEffect, useState } from 'react';
import commonContext from '../../contexts/common/commonContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { menuOpen, setMenuOpen } = useContext(commonContext);
    const { curLanguage, setLanguage } = useContext(commonContext);

    return (
        <>
            <div className={"topbar " + (menuOpen && "active")}>
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
                                <Link to={menuOpen?"/":"/menu"}>
                                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen); console.log('click', !menuOpen); }}>
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