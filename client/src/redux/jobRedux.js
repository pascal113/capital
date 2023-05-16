import { createSlice } from "@reduxjs/toolkit";

import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getJobSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs = action.payload;
    },
    getJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      toast.error("get job failed");
    }
  },
});

export const {
  getJobStart,
  getJobSuccess,
  getJobFailure
} = jobSlice.actions;

export default jobSlice.reducer;
