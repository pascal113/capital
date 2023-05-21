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
    types: [],
    locations: [],
    fields: [],
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
    },
    //DELETE
    deleteJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteJobSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs.splice(
        state.jobs.findIndex((item) => item._id === action.payload),
        1
      );
      toast.success("delete success");
    },
    deleteJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      toast.error("delete failed");
    },
    //UPDATE
    updateJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateJobSuccess: (state, action) => {
      state.isFetching = false;
      //console.log('state.jobs', JSON.stringify(state.jobs, undefined, 2));
      state.jobs[
        state.jobs.findIndex((item) => item._id === action.payload.data._id)
      ] = action.payload.data;
      toast.success("update success");
    },
    updateJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      toast.error("update failed");
    },
    //ADD
    addJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addJobSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs.push(action.payload);
      toast.success("add success");
    },
    addJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      toast.error("add failed");
    },

    //GET TYPE
    getJobTypeSuccess: (state, action) => {
      state.isFetching = false;
      state.types = action.payload;
    },
    getJobLocationSuccess: (state, action) => {
      state.isFetching = false;
      state.types = action.payload;
    },
    getJobFieldSuccess: (state, action) => {
      state.isFetching = false;
      state.types = action.payload;
    },
  },
});

export const {
  getJobStart,
  getJobSuccess,
  getJobFailure,
  deleteJobStart,
  deleteJobSuccess,
  deleteJobFailure,
  updateJobStart,
  updateJobSuccess,
  updateJobFailure,
  addJobStart,
  addJobSuccess,
  addJobFailure,
  getJobTypeSuccess,
  getJobLocationSuccess,
  getJobFieldSuccess
} = jobSlice.actions;

export default jobSlice.reducer;
