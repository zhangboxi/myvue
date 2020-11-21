import axios from "axios";
import { Message } from "element-ui";
import { baseurl } from "./url";
import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: baseurl,
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.state.user.token) {
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      debugger;
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
