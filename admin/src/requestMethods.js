import axios from "axios";

const BASE_URL = "http://localhost:3030/api/";
//const BASE_URL = "/api/";
//console.log('start data');
//let rootInfo = localStorage.getItem("persist:root");
//let TOKEN = 'test-tokent';
//console.log(rootInfo);
// if(rootInfo) {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// }


let userInfo = localStorage.getItem("user");
let TOKEN = '';
if(userInfo) {
  TOKEN = JSON.parse(localStorage.getItem("user")).token;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-auth-token": `${TOKEN}`,
  },
});
