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
    token: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token: '',
    isAdmin: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).isAdmin:false,
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
      localStorage.setItem("user", JSON.stringify({isAdmin: true, token: state.token}))
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
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.isAdmin = false;
      state.token = '';
      localStorage.removeItem("user");
    },
    logoutFailureWithMessage: (state, action) => {
      state.isFetching = false;
      state.error = true;
      toast.error(`${action.payload.message}`);
    },
    logoutFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      toast.error(`logout failed`);
    },
    changePasswordStart: (state) => {
      state.isFetching = true;
    },
    changePasswordSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      //state.isAdmin = true;
      //state.token = action.payload.data.token;
      //localStorage.setItem("user", JSON.stringify({isAdmin: true, token: state.token}));
      toast.success("change password success.");
    },
    changePasswordFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      toast.error(`change password failed`);
    },
    changePasswordFailureWithMessage: (state, action) => {
      state.isFetching = false;
      state.error = true;
      toast.error(`${action.payload.message}`);
    },
  },
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  loginFailureWithMessage, 
  logoutStart, 
  logoutSuccess, 
  logoutFailure, 
  logoutFailureWithMessage,
  changePasswordStart, 
  changePasswordSuccess, 
  changePasswordFailure, 
  changePasswordFailureWithMessage
} = userSlice.actions;

export default userSlice.reducer;
