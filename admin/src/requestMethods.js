import axios from "axios";

const BASE_URL = "http://localhost:3030/api/";
//console.log('start data');
//let rootInfo = localStorage.getItem("persist:root");
//let TOKEN = 'test-tokent';
//console.log(rootInfo);
// if(rootInfo) {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// }


let tokenInfo = localStorage.getItem("token");
let token = 'token';
if(tokenInfo) {
  token = tokenInfo;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-auth-token": `${token}`,
  },
});
