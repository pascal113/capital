import { 
  loginStart, 
  loginSuccess,  
  loginFailure,  
  loginFailureWithMessage,
  logoutStart, 
  logoutSuccess,  
  logoutFailure,  
  logoutFailureWithMessage,
} from "./userRedux";

import { 
  publicRequest, 
  userRequest 
} from "../requestMethods";

import {
  getSliderStart,
  getSliderSuccess,
  getSliderFailure,
  deleteSliderStart,
  deleteSliderSuccess,
  deleteSliderFailure,
  updateSliderStart,
  updateSliderSuccess,
  updateSliderFailure,
  addSliderStart,
  addSliderSuccess,
  addSliderFailure,
} from "./sliderRedux";

import {
  getMenuStart,
  getMenuSuccess,
  getMenuFailure,
  updateMenuStart,
  updateMenuSuccess,
  updateMenuFailure,
} from "./menuRedux";

import {
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
} from "./jobRedux";

export const login = async (dispatch, user, history) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    if(res.data.code === 0){
      dispatch(loginSuccess(res.data));
      history.push('/admin/');
    }
  } catch (err) {
    if (err.response) {
      dispatch(loginFailureWithMessage(err.response.data));
    } else {
      dispatch(loginFailure()); 
    }    
  }
};

export const logout = async (dispatch, history) => {
  dispatch(logoutStart());
  try {
    const res = await publicRequest.post("/auth/logout");
    if(res.data.code === 0){
      dispatch(logoutSuccess());
      history.push('/login');
    }
  } catch (err) {
    if (err.response) {
      dispatch(logoutFailureWithMessage(err.response.data));
    } else {
      dispatch(logoutFailure()); 
    }    
  }
};

export const getSliders = async (dispatch) => {
  dispatch(getSliderStart());

  try {
    const res = await userRequest.get("/images/list", { 
      params:{
        type: 'banner',
      }
    });
    dispatch(getSliderSuccess(res.data));
  } catch (err) {
    dispatch(getSliderFailure());
  }
};


export const addSlider = async (index, type, slider, dispatch) => {
  dispatch(addSliderStart());
  try {
    // add
    const res = await userRequest.post(
      `/images/add`, 
      slider, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
    });

    if(res.data.code === 0){
      const id = res.data.id;
      const data = res.data.data;
      dispatch(addSliderSuccess({ id, data }));
    }
  } catch (err) {
    dispatch(addSliderFailure());
  }
};

export const deleteSlider = async (id, dispatch) => {
  dispatch(deleteSliderStart());
  try {
    const res = await userRequest.delete(`/images/${id}`);
    if(res.data.code === 0){
      dispatch(deleteSliderSuccess(id));
    }
  } catch (err) {
    dispatch(deleteSliderFailure());
  }
};

export const updateSlider = async (id, slider, dispatch) => {
  dispatch(updateSliderStart());
  try {
    // update
    const res = await userRequest.post(
      `/images/${id}`, 
      slider, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

    if(res.data.code === 0){
      const data = res.data.data;
      dispatch(updateSliderSuccess({ id, data }));
    }
  } catch (err) {
    dispatch(updateSliderFailure());
  }
};

export const getMenus = async (dispatch) => {
  dispatch(getMenuStart());
  
  try {
    const res = await userRequest.get("/images/list", { 
      params:{
        type: 'hamburger',
      }
    });
    dispatch(getMenuSuccess(res.data));
  } catch (err) {
    dispatch(getMenuFailure());
  }
};

export const updateMenu = async (id, menu, dispatch) => {
  dispatch(updateMenuStart());
  try {
    // update
    const res = await userRequest.post(
      `/images/${id}`, 
      menu, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
    });

    if(res.data.code === 0){
      const data = res.data.data;
      dispatch(updateMenuSuccess({ id, data }));
    }
  } catch (err) {
    dispatch(updateMenuFailure());
  }
};

export const getJobTypes = async (dispatch) => {
  dispatch(getJobStart());
  try {
    const res = await userRequest.get("/jobs/types/list");
    if(res.data.code === 0){
      dispatch(getJobTypeSuccess(res.data.data));
    }
  } catch (err) {
    dispatch(getJobFailure());
  }
};

export const getJobLocations = async (dispatch) => {
  dispatch(getJobStart());
  try {
    const res = await userRequest.get("/jobs/locations/list");
    if(res.data.code === 0){
      dispatch(getJobLocationSuccess(res.data.data));
    }
  } catch (err) {
    dispatch(getJobFailure());
  }
};

export const getJobFields = async (dispatch) => {
  dispatch(getJobStart());
  try {
    const res = await userRequest.get("/jobs/fields/list");
    if(res.data.code === 0){
      dispatch(getJobFieldSuccess(res.data.data));
    }
  } catch (err) {
    dispatch(getJobFailure());
  }
};

export const getJobs = async (dispatch) => {
  dispatch(getJobStart());
  try {
    const res = await userRequest.get("/jobs/list");
    if(res.data.code === 0){
      dispatch(getJobSuccess(res.data.data));
    }
  } catch (err) {
    dispatch(getJobFailure());
  }
};

export const deleteJob = async (id, dispatch) => {
  dispatch(deleteJobStart());
  try {
    const res = await userRequest.delete(`/jobs/${id}`);
    if(res.data.code === 0){
      dispatch(deleteJobSuccess(id));
    }
  } catch (err) {
    dispatch(deleteJobFailure());
  }
};

export const updateJob = async (id, job, dispatch) => {
  dispatch(updateJobStart());
  try {
    const res = await userRequest.post(
      `/jobs/${id}`, 
      job, 
    );

    if(res.data.code === 0){
      const data = res.data.data;
      dispatch(updateJobSuccess({ id, data }));
    }
  } catch (err) {
    dispatch(updateJobFailure());
  }
};
export const addJob = async (job, dispatch) => {
  dispatch(addJobStart());
  try {
    const res = await userRequest.post(
      `/jobs/add`, 
      job, 
    );
    if(res.data.code === 0){
      const data = res.data.data;
      dispatch(addJobSuccess(data));
    }
  } catch (err) {
    dispatch(addJobFailure());
  }
};
