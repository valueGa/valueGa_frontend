import axios from 'axios';

const BASE_URL = '/api/valuation';
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const getValuation = async (stockId, startYear) => {
  const res = await service.get(
    `/init?stock_id=${stockId}&start_year=${startYear}`
  );
  return res;
};
