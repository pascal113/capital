import axios from "axios";

let BASE_URL = "http://localhost:3030";

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_API_PORT;

if(apiPort) {
  BASE_URL = apiUrl + ':' + apiPort;
}
else {
  BASE_URL = apiUrl;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL + '/api/',
});

export const getBaseURL = () => {
  return BASE_URL + '/';
};
