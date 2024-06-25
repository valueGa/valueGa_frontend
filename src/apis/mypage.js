import axios from 'axios';

const BASE_URL = '/api/user';
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

service.interceptors.request.use(
  function (config) {
    config.headers['auth'] = localStorage.getItem('valueGa_AccessToken');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getUserInfo = async (id) => {
  const res = await service.get(`/${id}`);
  return res;
};
