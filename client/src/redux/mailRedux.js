import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        isFetching: false,
        error: false,
    },
    reducers: {
        // Send contact mail
        sendContactStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        sendContactSuccess: (state) => {
            state.isFetching = false;
            toast.success("send mail success");
        },
        sendContactFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            toast.error("send mail failed");
        },
        sendJobStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        sendJobSuccess: (state) => {
            state.isFetching = false;
            toast.success("send mail success");
        },
        sendJobFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            toast.error("send mail failed");
        },
    },
});

export const {
    sendContactStart,
    sendContactSuccess,
    sendContactFailure,
    sendJobStart,
    sendJobSuccess,
    sendJobFailure
} = mailSlice.actions;

export default mailSlice.reducer;
