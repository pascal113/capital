import { createSlice } from "@reduxjs/toolkit";
import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "bottomRight",
    duration: 2,
    maxCount: 3
});

const getTypeInfo = (types, index) => {
  const type = types.find(item => item.id === index);
  return type;
};

const getLocationInfo = (locations, index) => {
  const location = locations.find(item => item.id === index);
  return location;
};

const getFieldInfo = (fields, indexs) => {
  let fieldInfo = [];
  let name_de = '';
  let name_gb = '';

  const indexArray = indexs.split(",");
  indexArray.forEach((fieldId) => {
    const field = fields.find(item => item.id === fieldId);
    if(field) {
      name_de += field.name_de + ',';
      name_gb += field.name_gb + ',';
    }
  });

  fieldInfo.name_de = name_de.slice(0, -1);
  fieldInfo.name_gb = name_gb.slice(0, -1);

  return fieldInfo;
};

const makeJobItemData = (state, serverData) => {
  // let clonedAboutData = JSON.parse(JSON.stringify(aboutData));
  // let basic_data = clonedAboutData;

  let basic_data = [];  

  serverData.forEach((job, index) => {
      let tmpData = {};
      tmpData.id = index;
      tmpData.name = "German Capital Pharma GmbH";
      tmpData.activity_de = job.title_de;

      let typeInfo = getTypeInfo(state.types, job.type);
      let locationInfo = getLocationInfo(state.locations, job.location);
      let fieldInfo = getFieldInfo(state.fields, job.field);
      tmpData.type_de = 'Art: ' + typeInfo.name_de + ' | ' + locationInfo.name_de
         + ' | ' + fieldInfo.name_de;
      
      tmpData.about_de = job.about_de;

      tmpData.activity_gb = job.title_gb;
      tmpData.type_gb = 'Art: ' + typeInfo.name_gb + ' | ' + locationInfo.name_gb
         + ' | ' + fieldInfo.name_gb;
      
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
      state.types = action.payload.types;
      state.locations = action.payload.locations;
      state.fields = action.payload.fields;
      state.jobs = makeJobItemData(state, action.payload.jobs);
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
      state.types = action.payload.data;
    },
    getTypeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.types = [];
      toast.error("get type failed");
    },
    // Get Locations
    getLocationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getLocationSuccess: (state, action) => {
      state.isFetching = false;
      state.locations = action.payload.data;
    },
    getLocationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.locations = [];
      toast.error("get locations failed");
    },
    // Get Fields
    getFieldStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getFieldSuccess: (state, action) => {
      state.isFetching = false;
      state.fields = action.payload.data;
    },
    getFieldFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.fields = [];
      toast.error("get fields failed");
    }
  },
});

export const {
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
} = jobSlice.actions;

export default jobSlice.reducer;