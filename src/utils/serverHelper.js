import cookie from "react-cookies";
import { axiosInstance } from "./axiosHelper";

export const getData = async (url) => {
  const token = cookie.load("token");

  const data = await axiosInstance.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data.data;
};

export const postData = async (url, req) => {
  const token = cookie.load("token");
  const data = await axiosInstance.post(url, req, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data.data;
};

export const putData = async (url, req) => {
  const token = cookie.load("token");

  const data = await axiosInstance.put(url, req, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data.data;
};

export const patchData = async (url, req) => {
  const token = cookie.load("token");

  const data = await axiosInstance.patch(url, req, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
};

export const deleteData = async (url) => {
  const token = cookie.load("token");

  const data = await axiosInstance.delete(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data.data;
};
