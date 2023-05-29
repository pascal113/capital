import React, {useState, useEffect, useContext } from 'react';
import SideMenubar from '../components/sidebar/SideMenubar';
import menuContext, { MenuProvider } from '../contexts/menu/menuContext';
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../redux/apiCalls";

const MenuPage = () => {
    const { imgUrl, descText } = useContext(menuContext);

    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menu.menus);

    useEffect(() => {
        console.log('MenuPage useEffect');
        getMenus(dispatch);
    }, [dispatch]);

    return (
        <div id="menu_page" className="section">
            <div className="container">
                <div className="menu_page_wrapper">
                    <div className="menu_page_left_col">
                        <SideMenubar menuData={menus} />
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