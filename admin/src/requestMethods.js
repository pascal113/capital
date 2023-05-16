import axios from "axios";

let BASE_URL = "http://localhost:3030";

//const BASE_URL = "/api/";
//console.log('start data');
//let rootInfo = localStorage.getItem("persist:root");
//let TOKEN = 'test-tokent';
//console.log(rootInfo);
// if(rootInfo) {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// }

const apiUrl = process.env.REACT_APP_API_URL;
const apiPort = process.env.REACT_APP_API_PORT;

if(apiPort) {
  BASE_URL = apiUrl + ':' + apiPort;
}
else {
  BASE_URL = apiUrl;
}

let userInfo = localStorage.getItem("user");
let TOKEN = '';
if(userInfo) {
  TOKEN = JSON.parse(localStorage.getItem("user")).token;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL + '/api/',
});

export const userRequest = axios.create({
  baseURL: BASE_URL + '/api/',
  headers: {
    "x-auth-token": `${TOKEN}`,
  },
});

export const getBaseURL = () => {
  return BASE_URL + '/';
};
