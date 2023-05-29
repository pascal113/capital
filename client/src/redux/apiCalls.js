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
  getJobFailure,
  getTypeStart,
  getTypeSuccess,
  getTypeFailure,
  getLocationStart,
  getLocationSuccess,
  getLocationFailure,
  getFieldStart,
  getFieldSuccess,
  getFieldFailure
} from "./jobRedux";

import {
  sendContactStart,
  sendContactSuccess,
  sendContactFailure,
  sendContactFailureWithMessage,
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

// export const getJobs = async (search, dispatch) => {
//   dispatch(getJobStart());
//   try {
//     const res = await publicRequest.get("/jobs/list", {
//       params:search
//     });

//     if(res.data.code === 0 || res.data.code === 1){
//       dispatch(getJobSuccess(res.data));
//     }
//   } catch (err) {
//     dispatch(getJobFailure());
//   }
// };

export const getJobs = async (search, dispatch) => {
  dispatch(getJobStart());
  try {
    let real_res = [];
    let res = await publicRequest.get("/types/list");

    if(res.data.code === 0){
      real_res.types = res.data.data;
    }

    res = await publicRequest.get("/locations/list");

    if(res.data.code === 0){
      real_res.locations = res.data.data;
    }

    res = await publicRequest.get("/fields/list");

    if(res.data.code === 0){
      real_res.fields = res.data.data;
    }

    res = await publicRequest.get("/jobs/list", {
      params:search
    });

    if(res.data.code === 0 || res.data.code === 1){
      real_res.jobs = res.data.data;
      dispatch(getJobSuccess(real_res));
    }
  } catch (err) {
    console.log(err);
    dispatch(getJobFailure());
  }
};

export const getTypes = async (dispatch) => {
  dispatch(getTypeStart());
  try {
    const res = await publicRequest.get("/types/list");

    if(res.data.code === 0 || res.data.code === 1){
      dispatch(getTypeSuccess(res.data));
    }
  } catch (err) {
    dispatch(getTypeFailure());
  }
};

export const getLocations = async (dispatch) => {
  dispatch(getLocationStart());
  try {
    const res = await publicRequest.get("/locations/list");

    if(res.data.code === 0 || res.data.code === 1){
      dispatch(getLocationSuccess(res.data));
    }
  } catch (err) {
    dispatch(getLocationFailure());
  }
};

export const getFields = async (dispatch) => {
  dispatch(getFieldStart());
  try {
    const res = await publicRequest.get("/fields/list");

    if(res.data.code === 0 || res.data.code === 1){
      dispatch(getFieldSuccess(res.data));
    }
  } catch (err) {
    dispatch(getFieldFailure());
  }
};

export const sendContactMail = async (params, dispatch) => {
  dispatch(sendContactStart());
  try {
    const res = await publicRequest.post(
      "/mail/contact", 
      params);

      if(res.data.code === 0){
      dispatch(sendContactSuccess());
    }
  } catch (err) {
    if (err.response) {
      dispatch(sendContactFailureWithMessage(err.response.data));
    } else {
      dispatch(sendContactFailure()); 
    }    
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