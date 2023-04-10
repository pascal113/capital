import React from 'react';
import { Link } from 'react-router-dom';
import SideMenubar from '../components/sidebar/SideMenubar';
import PageIntroduce from './PageIntroduce'

const MenuPage = () => {
    return (
        <div id="menu_page" className="section">
            <div className="container">
                <div className="menu_page_wrapper">
                    <div className="menu_page_left_col">
                        <img src="./images/menu/menu_bkg.png" alt="" />
                    </div>
                    <div className="menu_page_right_col">
                        <div className='menu_page_img'>
                            <img src="./images/menu/menu-page-1.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage