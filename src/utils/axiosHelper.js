import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "https://v3.immersfy.com/api",
  timeout: 300 * 1000,
  maxRedirects: 0,
  withCredentials: true,
});
