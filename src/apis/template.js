import axios from 'axios';

const BASE_URL = '/api/template';
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

export const getMyTemplate = async () => {
  const res = await service.get(`/`);
  return res;
};

export const deleteMyTemplate = async (templateId) => {
  const res = await service.delete(`/${templateId}`);
  return res;
};

export const getMyTemplateById = async (templateId) => {
  const res = await service.get(`/${templateId}`);
  return res;
};

export const editMyTemplate = async (templateId, requestBody) => {
  const res = await service.put(`/${templateId}`, requestBody);
  console.log(res);
  return res;
};

export const getTemplateById = async (templateId) => {
  const res = await service.get(`/${templateId}`);
  return res;
};
