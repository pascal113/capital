import axios from "axios";

const BASE_URL = "http://localhost:3030/api/";

console.log('requestMethods');
console.log(BASE_URL);
//const BASE_URL = "/api/";
//console.log('start data');
//let rootInfo = localStorage.getItem("persist:root");
//let TOKEN = 'test-tokent';
//console.log(rootInfo);
// if(rootInfo) {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// }

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_PORT;
console.log(apiUrl); // Output: http://example.com/api
console.log(apiKey); // Output: 123456789



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
