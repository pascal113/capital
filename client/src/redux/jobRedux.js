import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";
import aboutData from '../data/aboutData';

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
      tmpData.activity = job.title;
      tmpData.type = 'Art: ' + job.type + ' | ' + job.location
         + ' | ' + job.field;
      
      // job.about.button_label = "JETZT BEWERBEN";
      tmpData.about = job.about;

      basic_data.push(tmpData);
  });

  return basic_data;
};

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
      state.jobs = makeJobItemData(action.payload.data);
    },
    getJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.jobs = aboutData;
      toast.error("get job failed");
    }
  },
});

export const {
  getJobStart,
  getJobSuccess,
  getJobFailure
} = jobSlice.actions;

export default jobSlice.reducer;
