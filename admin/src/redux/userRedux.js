import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: '',
    isAdmin: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isAdmin = true;
      state.token = action.payload.data.token;
      localStorage.setItem("token", state.token);
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.isAdmin = false;
      state.error = true;
      toast.error(`login failed`);
    },
    loginFailureWithMessage: (state, action) => {
      state.isFetching = false;
      state.isAdmin = false;
      state.error = true;
      toast.error(`${action.payload.message}`);
    },
    logout: (state) => {
      state.isAdmin = false;
      state.token = '';
      localStorage.setItem("token", state.token);
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, loginFailureWithMessage } = userSlice.actions;
export default userSlice.reducer;
