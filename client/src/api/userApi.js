import axiosInstance from "./axiosInstance";

export const signUpUser = async (userData) => {
  const res = await axiosInstance.post("/users/signup", userData);
  return res.data;
};

export const signInUser = async (userData) => {
  const res = await axiosInstance.post("/users/signin", userData);
  return res.data;
};
