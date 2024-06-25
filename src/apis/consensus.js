import axios from "axios";

const BASE_URL = "/api/consensus";
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["auth"] = localStorage.getItem("valueGa_AccessToken");
    console.log(`${localStorage.getItem("valueGa_AccessToken")}`);
    return config;
  },
  function (error) {
    // Do something with Request error
    return Promise.reject(error);
  }
);

export const getConsensus = async () => {
  const res = await service.get(`/`);
  return res;
};

export const getConsensusMore = async (count) => {
  const res = await service.get(``, {
    params: { index: count },
  });
  return res;
};
