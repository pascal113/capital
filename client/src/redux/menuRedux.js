import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";
import { menuItems } from '../data/menuItems';
import { getBaseURL } from "../requestMethods";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

const makeMenuItemData = (serverData) => {
    let clonedMenuItems = JSON.parse(JSON.stringify(menuItems));
    let basic_data = clonedMenuItems;

    serverData.forEach((menu) => {
        menu.path = getBaseURL() + menu.path;
    });
        
    basic_data[0].imgUrl = serverData[1].path;
    basic_data[0].descText = serverData[1].title_de;
    basic_data[0].descTextEn = serverData[1].title_gb;

    basic_data[0].submenu[0].imgUrl = serverData[2].path;
    basic_data[0].submenu[0].descText = serverData[2].title_de;
    basic_data[0].submenu[0].descTextEn = serverData[2].title_gb;

    basic_data[0].submenu[1].imgUrl = serverData[3].path;
    basic_data[0].submenu[1].descText = serverData[3].title_de;
    basic_data[0].submenu[1].descTextEn = serverData[3].title_gb;


    basic_data[1].imgUrl = serverData[4].path;
    basic_data[1].descText = serverData[4].title_de;
    basic_data[1].descTextEn = serverData[4].title_gb;

    basic_data[1].submenu[0].imgUrl = serverData[5].path;
    basic_data[1].submenu[0].descText = serverData[5].title_de;
    basic_data[1].submenu[0].descTextEn = serverData[5].title_gb;

    basic_data[1].submenu[1].imgUrl = serverData[6].path;
    basic_data[1].submenu[1].descText = serverData[6].title_de;
    basic_data[1].submenu[1].descTextEn = serverData[6].title_gb;

    basic_data[1].submenu[2].imgUrl = serverData[7].path;
    basic_data[1].submenu[2].descText = serverData[7].title_de;
    basic_data[1].submenu[2].descTextEn = serverData[7].title_gb;

    /*basic_data[1].submenu[3].imgUrl = serverData[8].path;
    basic_data[1].submenu[3].descText = serverData[8].title_de;
    basic_data[1].submenu[3].descTextEn = serverData[8].title_gb;*/

    basic_data[2].imgUrl = serverData[9].path;
    basic_data[2].descText = serverData[9].title_de;
    basic_data[2].descTextEn = serverData[9].title_gb;

    basic_data[2].submenu[0].imgUrl = serverData[10].path;
    basic_data[2].submenu[0].descText = serverData[10].title_de;
    basic_data[2].submenu[0].descTextEn = serverData[10].title_gb;

    basic_data[3].imgUrl = serverData[11].path;
    basic_data[3].descText = serverData[11].title_de;
    basic_data[3].descTextEn = serverData[11].title_gb;

    basic_data[3].submenu[0].imgUrl = serverData[12].path;
    basic_data[3].submenu[0].descText = serverData[12].title_de;
    basic_data[3].submenu[0].descTextEn = serverData[12].title_gb;

    return basic_data;
};


export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menus: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getMenuStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getMenuSuccess: (state, action) => {
            state.isFetching = false;
            state.menus = makeMenuItemData(action.payload.data);          
        },
        getMenuFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.menus = menuItems;
            toast.error("get menu failed");
        }
    },
});

export const {
    getMenuStart,
    getMenuSuccess,
    getMenuFailure
} = menuSlice.actions;

export default menuSlice.reducer;
