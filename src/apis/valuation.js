import axios from 'axios';

const BASE_URL = '/api/valuation';
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

export const postValuation = async (stockId, templateId, years) => {
  const res = await service.post(`/init`, {
    stock_id: stockId,
    template_id: templateId,
    years: years,
  });
  return res;
};

export const getValuations = async () => {
  const res = await service.get(`/valuations`);
  return res;
};

export const getValuation = async (id) => {
  const res = await service.get(`/${id}`);
  return res;
};
export const deleteValuation = async (valuationId) => {
  const res = await service.delete(`/${valuationId}`);
  return res;
};

export const saveValuation = async (id, requestBody) => {
  const res = await service.post(`?id=${id}`, requestBody);
  return res;
};

export const temporarySaveValuation = async (id, requestBody) => {
  const res = await service.post(`/temporary?id=${id}`, requestBody);
  return res;
};

export const editSaveValuation = async (id, requestBody) => {
  const res = await service.put(`/${id}`, requestBody);
  return res;
};

export const editTemporarySaveValuation = async (id, requestBody) => {
  const res = await service.put(`/temporary/${id}`, requestBody);
  return res;
};
