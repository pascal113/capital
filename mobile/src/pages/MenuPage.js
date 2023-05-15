import React, {useState, useEffect, useContext } from 'react';
import SideMenubar from '../components/sidebar/SideMenubar';
import menuContext, { MenuProvider } from '../contexts/menu/menuContext';

const MenuPage = () => {
    const { imgUrl, descText } = useContext(menuContext);

    return (
        <div id="menu_page" className="section">
            <div className="container">
                <div className="menu_page_wrapper">
                    <div className="menu_page_left_col">
                        <SideMenubar />
                    </div>
                    <div className="menu_page_right_col">
                        <div className='menu_page_img'>
                            {<img src={imgUrl} alt="introduce"></img>}
                        </div>
                        <h2 className='menu_page_text'>
                            {descText}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage