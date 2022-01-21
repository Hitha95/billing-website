import axios from "axios";
import { useSelector } from "react-redux";
//let token = JSON.parse(localStorage.getItem("billing-token")) || "";

export const axiosInstance1 = axios.create({
  baseURL: "http://dct-billing-app.herokuapp.com/api/",
});

export const axiosInstance = axios.create({
  baseURL: "http://dct-billing-app.herokuapp.com/api/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("billing-token"),
  },
});

// axiosInstance.defaults.headers.common["Authorization"] =
//   "Bearer " + localStorage.getItem("billing-token");
