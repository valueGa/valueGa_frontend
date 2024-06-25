import axios from "axios";

const BASE_URL = "/api/valuation";
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const postValuation = async (stockId, templateId, years) => {
  const res = await service.post(`/init`, {
    stock_id: stockId,
    template_id: templateId,
    years: years,
  });
  return res;
};
