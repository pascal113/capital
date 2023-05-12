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
        },
        
        //UPDATE
        updateMenuStart: (state) => {
        state.isFetching = true;
        state.error = false;
        },
        updateMenuSuccess: (state, action) => {
        state.isFetching = false;
        state.menus[
            state.menus.findIndex((item) => item._id === action.payload.id)
        ] = action.payload.data;
        toast.success("update success");
        },
        updateMenuFailure: (state) => {
        state.isFetching = false;
        state.error = true;
        toast.error("update failed");
        },
    },
});

export const {
    getMenuStart,
    getMenuSuccess,
    getMenuFailure,
    updateMenuStart,
    updateMenuSuccess,
    updateMenuFailure,
} = menuSlice.actions;

export default menuSlice.reducer;
