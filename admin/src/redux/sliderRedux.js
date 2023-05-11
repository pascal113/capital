import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

export const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        sliders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getSliderStart: (state) => {
        state.isFetching = true;
        state.error = false;
        },
        getSliderSuccess: (state, action) => {
        state.isFetching = false;
        state.sliders = action.payload.data;
        },
        getSliderFailure: (state) => {
        state.isFetching = false;
        state.error = true;
        },
        //DELETE
        deleteSliderStart: (state) => {
        state.isFetching = true;
        state.error = false;
        },
        deleteSliderSuccess: (state, action) => {
        state.isFetching = false;
        state.sliders.splice(
            state.sliders.findIndex((item) => item._id === action.payload.id),
            1
        );
        toast.success("delete success");
        },
        deleteSliderFailure: (state) => {
        state.isFetching = false;
        state.error = true;
        toast.error("delete failed");
        },
        //UPDATE
        updateSliderStart: (state) => {
        state.isFetching = true;
        state.error = false;
        },
        updateSliderSuccess: (state, action) => {
        state.isFetching = false;
        state.sliders[
            state.sliders.findIndex((item) => item._id === action.payload.id)
        ] = action.payload.data;
        toast.success("update success");
        },
        updateSliderFailure: (state) => {
        state.isFetching = false;
        state.error = true;
        toast.error("update failed");
        },
        //ADD
        addSliderStart: (state) => {
        state.isFetching = true;
        state.error = false;
        },
        addSliderSuccess: (state, action) => {
        state.isFetching = false;
        state.sliders.push(action.payload.data);
        toast.success("add success");
        },
        addSliderFailure: (state) => {
        state.isFetching = false;
        state.error = true;
        toast.error("add failed");
        },
    },
});

export const {
    getSliderStart,
    getSliderSuccess,
    getSliderFailure,
    deleteSliderStart,
    deleteSliderSuccess,
    deleteSliderFailure,
    updateSliderStart,
    updateSliderSuccess,
    updateSliderFailure,
    addSliderStart,
    addSliderSuccess,
    addSliderFailure,
} = sliderSlice.actions;

export default sliderSlice.reducer;
