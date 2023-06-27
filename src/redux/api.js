import axios from "axios";
const env = import.meta.env;
const URL = env.VITE_REACT_SERVER_URL;
const API = axios.create({ baseURL: URL });

export const getAllShoes = () => {
  return API.get("/shoes/getAllShoes");
};
export const getSingleShoes = (id) => {
  return API.get(`/shoes/getSingleShoes/${id}`);
};
