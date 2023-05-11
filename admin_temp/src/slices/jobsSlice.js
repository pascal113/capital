import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const jobsFetch = createAsyncThunk(
  "jobs/jobsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/jobs/list`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const jobsCreate = createAsyncThunk(
  "jobs/jobsCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/jobs`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: {
    [jobsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [jobsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [jobsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [jobsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [jobsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Product Created!");
    },
    [jobsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});

export default jobsSlice.reducer;
