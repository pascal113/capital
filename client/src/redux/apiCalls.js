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

export const getJobs = async (dispatch) => {
  dispatch(getJobStart());
  try {
    const res = await publicRequest.get("/jobs/list");
    if(res.data.code === 0){
      dispatch(getJobSuccess(res.data));
    }
  } catch (err) {
    dispatch(getJobFailure());
  }
};