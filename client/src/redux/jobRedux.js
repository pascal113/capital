import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

const makeJobItemData = (serverData) => {
  // let clonedAboutData = JSON.parse(JSON.stringify(aboutData));
  // let basic_data = clonedAboutData;

  let basic_data = [];  
  // let basic_data = {};  

  serverData.forEach((job, index) => {
      let tmpData = {};
      // let tmpData = [];
      tmpData.id = index;
      tmpData.name = "German Capital Pharma GmbH";
      tmpData.activity_de = job.title_de;
      tmpData.type_de = 'Art: ' + job.type + ' | ' + job.location
         + ' | ' + job.field;
      
      tmpData.about_de = job.about_de;

      tmpData.activity_gb = job.title_gb;
      tmpData.type_gb = 'Art: ' + job.type + ' | ' + job.location
         + ' | ' + job.field;
      
      tmpData.about_gb = job.about_gb;

      basic_data.push(tmpData);
  });

  return basic_data;
};

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
      state.jobs = makeJobItemData(action.payload.data);
    },
    getJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.jobs = [];
      toast.error("get job failed");
    },
    // Get Types
    getTypeStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTypeSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs = makeJobItemData(action.payload.data);
    },
    getTypeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.jobs = [];
      toast.error("get job failed");
    },
    // Get Locations
    getLocationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getLocationSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs = makeJobItemData(action.payload.data);
    },
    getLocationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.jobs = [];
      toast.error("get job failed");
    },
    // Get Fields
    getFieldStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getFieldSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs = makeJobItemData(action.payload.data);
    },
    getFieldFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.jobs = [];
      toast.error("get job failed");
    }
  },
});

export const {
  getJobStart,
  getJobSuccess,
  getJobFailure,
} = jobSlice.actions;

export default jobSlice.reducer;
