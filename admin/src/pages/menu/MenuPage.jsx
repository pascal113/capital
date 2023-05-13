import React, { useState, useEffect, useRef } from 'react';
import "./menuPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../../redux/apiCalls";
import MenuList from "./MenuList";
import MenuEditForm from "./MenuEditForm";

const MenuPage = () => {
    console.log('menupage rendering');
    
    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menu.menus);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        getMenus(dispatch);
    }, [dispatch]);

    const handleListItemClick = (index) => {
        console.log('index', index);
        setSelectedIndex(index);
        //setMenuData(menus.filter((item) => item.order === index)[0]);
    };

    return (
        <div className='menuPage'>
            <MenuList handleListItemClick={handleListItemClick}/>
            <MenuEditForm menus={menus} selectedIndex={selectedIndex}/>
        </div>
    );
}

export default MenuPage
