import { createSlice } from "@reduxjs/toolkit";

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
    },
    deleteJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateJobSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs[
        state.jobs.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addJobSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs.push(action.payload);
    },
    addJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
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
} = jobSlice.actions;

export default jobSlice.reducer;
