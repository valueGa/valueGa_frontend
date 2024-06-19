import axios from 'axios';

const BASE_URL = '/api/valuation';
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const postValuation = async (stockId, years) => {
  const res = await service.post(`/`, {
    stock_id: stockId,
    years: years,
  });
  return res;
};
