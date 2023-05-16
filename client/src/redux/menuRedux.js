import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

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
            state.menus = action.payload.data;
        },
        getMenuFailure: (state) => {
            state.isFetching = false;
            state.error = true;
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
