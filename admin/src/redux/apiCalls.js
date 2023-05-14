import { loginFailure, loginStart, loginSuccess,   loginFailureWithMessage } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";


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

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if(res.data.code === 0){
      dispatch(loginSuccess(res.data));
    }
    else {
      dispatch(loginFailureWithMessage(res.data));
    }
  } catch (err) {
    dispatch(loginFailure());
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
      else {
        dispatch(addSliderFailure());
      }
    
  } catch (err) {
    dispatch(addSliderFailure());
  }
};

export const deleteSlider = async (id, dispatch) => {
  dispatch(deleteSliderStart());
  try {
    const res = await userRequest.delete(`/images/${id}`);
    dispatch(deleteSliderSuccess(id));
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
      else {
        dispatch(updateSliderFailure());
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
      else {
        dispatch(updateMenuFailure());
      }
    
  } catch (err) {
    dispatch(updateMenuFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
