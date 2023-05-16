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
            console.log('getSliderSuccess');
            console.log(state.sliders);
        },
        getSliderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            toast.error("get images failed");
        }
    },
});

export const {
    getSliderStart,
    getSliderSuccess,
    getSliderFailure
} = sliderSlice.actions;

export default sliderSlice.reducer;
