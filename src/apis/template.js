import axios from "axios";

const BASE_URL = "/api/template";
const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const getTemplateById = async (templateId) => {
  const res = await service.get(`/${templateId}`);
  return res;
};
