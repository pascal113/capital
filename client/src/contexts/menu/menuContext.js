import React, { createContext, useEffect, useReducer } from 'react';
import menuReducer from './menuReducer';

// Menu-Context
const menuContext = createContext();

// Initial State
const initialState = {
    imgUrl: './images/menu/menu-page-1.png',
    descText: 'Home'
};

// MenuProvider Component
const MenuProvider = ({ children }) => {

    const [state, dispatch] = useReducer(menuReducer, initialState);

    useEffect(() => {
        
    }, []);

    // Dispatched Actions
    const selectItem = (item) => {
        return dispatch({
            type: 'SELECT_MENU_ITEM',
            payload: { item }
        });
    };

    const hoverItem = (item) => {
        return dispatch({
            type: 'HOVER_MENU_ITEM',
            payload: {'imgUrl': item.imgUrl, 'descText': item.descText}
        });
    };

    // Context values
    const values = {
        ...state,
        selectItem,
        hoverItem
    };

    return (
        <menuContext.Provider value={values}>
            {children}
        </menuContext.Provider>
    );
};


export default menuContext;
export { MenuProvider };