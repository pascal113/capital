import { publicRequest } from "../requestMethods";

import {
  getSliderStart,
  getSliderSuccess,
  getSliderFailure
} from "./sliderRedux";

import {
  getMenuStart,
  getMenuSuccess,
  getMenuFailure
} from "./menuRedux";

import {
  getJobStart,
  getJobSuccess,
  getJobFailure
} from "./jobRedux";

import {
  sendContactStart,
  sendContactSuccess,
  sendContactFailure,
  sendJobStart,
  sendJobSuccess,
  sendJobFailure
} from "./mailRedux";

export const getSliders = async (dispatch) => {
  dispatch(getSliderStart());

  try {
    const res = await publicRequest.get("/images/list", { 
      params:{
        type: 'banner',
      }
    });
    dispatch(getSliderSuccess(res.data));
  } catch (err) {
    dispatch(getSliderFailure());
  }
};

export const getMenus = async (dispatch) => {
  dispatch(getMenuStart());
  
  try {
    const res = await publicRequest.get("/images/list", { 
      params:{
        type: 'hamburger',
      }
    });
    dispatch(getMenuSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getMenuFailure());
  }
};

export const getJobs = async (search, dispatch) => {
  dispatch(getJobStart());
  try {
    const res = await publicRequest.get("/jobs/list", {
      params:search
    });

    // const res = await publicRequest.get(
    //   "/jobs/list",
    //   search
    // );

    if(res.data.code === 0 || res.data.code === 1){
      dispatch(getJobSuccess(res.data));
    }
  } catch (err) {
    dispatch(getJobFailure());
  }
};

export const sendContactMail = async (params, dispatch) => {
  dispatch(sendContactStart());
  try {
    console.log('sendContactMail');
    console.log(params);
    const res = await publicRequest.post(
      "/mail/contact", 
      params);

      if(res.data.code === 0){
      dispatch(sendContactSuccess());
    }
  } catch (err) {
    dispatch(sendContactFailure());
  }
};

export const sendJobMail = async (params, dispatch) => {
  dispatch(sendJobStart());
  try {
    const res = await publicRequest.post(
      `/mail/job`, 
      params, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
    });

    if(res.data.code === 0){
      dispatch(sendJobSuccess());
      return true;
    }
  } catch (err) {
    dispatch(sendJobFailure());
    return false;
  }
};