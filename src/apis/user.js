import axios from "axios";

const BASE_URL = "/api/auth/";
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const postSignup = async (userName, userEmail, userPassword) => {
  const res = await service.post(`/register`, {
    user_name: userName,
    user_email: userEmail,
    user_password: userPassword,
  });
  return res;
};

export const postLogin = async (userEmail, userPassword) => {
  const res = await service.post(`/login`, {
    user_email: userEmail,
    user_password: userPassword,
  });
  return res;
};
