import axios from "axios";
const env = import.meta.env;
const URL = env.VITE_REACT_SERVER_URL;
const API = axios.create({ baseURL: URL });

// fetch all shoes
export const getAllShoes = () => {
  return API.get("/shoes/getAllShoes");
};
export const getSingleShoes = (id) => {
  return API.get(`/shoes/getSingleShoes/${id}`);
};

// fetch men shoes

// getAllAddidasMen (adidas)
export const getAllAddidasMen = () => {
  return API.get("/shoes/getAllAddidasMen");
};
// getSingleAddidasMen
export const getSingleAddidasMen = (id) => {
  return API.get(`/shoes/getSingleAddidasMen/${id}`);
};

// getAllNewbalanceMen (newBalance)
export const getAllNewbalanceMen = () => {
  return API.get("/shoes/getAllNewbalanceMen");
};
// getSingleNewbalanceMen
export const getSingleNewbalanceMen = (id) => {
  return API.get(`/shoes/getSingleNewbalanceMen/${id}`);
};

// getAllNikeMen (nike)
export const getAllNikeMen = () => {
  return API.get("/shoes/getAllNikeMen");
};
// getSingleNikeMen
export const getSingleNikeMen = (id) => {
  return API.get(`/shoes/getSingleNikeMen/${id}`);
};

// getAllUnderArmourMen (underArmour)
export const getAllUnderArmourMen = () => {
  return API.get("/shoes/getAllUnderArmourMen");
};
// getSingleUnderArmourMen
export const getSingleUnderArmourMen = (id) => {
  return API.get(`/shoes/getSingleUnderArmourMen/${id}`);
};

// fetch women shoes

// getAllAddidasWomen (adidas)
export const getAllAddidasWomen = () => {
  return API.get("/shoes/getAllAddidasWomen");
};
// getSingleAddidasWomen
export const getSingleAddidasWomen = (id) => {
  return API.get(`/shoes/getSingleAddidasWomen/${id}`);
};

// getAllNewbalanceWomen (newBalance)
export const getAllNewbalanceWomen = () => {
  return API.get("/shoes/getAllNewbalanceWomen");
};
// getSingleNewbalanceWomen
export const getSingleNewbalanceWomen = (id) => {
  return API.get(`/shoes/getSingleNewbalanceWomen/${id}`);
};

// getAllNikeWomen (nike)
export const getAllNikeWomen = () => {
  return API.get("/shoes/getAllNikeWomen");
};
// getSingleNikeWomen
export const getSingleNikeWomen = (id) => {
  return API.get(`/shoes/getSingleNikeWomen/${id}`);
};

// getAllUnderArmourWomen (underArmour)
export const getAllUnderArmourWomen = () => {
  return API.get("/shoes/getAllUnderArmourWomen");
};
// getSingleUnderArmourWomen
export const getSingleUnderArmourWomen = (id) => {
  return API.get(`/shoes/getSingleUnderArmourWomen/${id}`);
};

export const login = (formData) => API.post("/user/login", formData);
export const register = (formData) => API.post("/user/register", formData);

export const addToCart = (formData, token) =>
  API.post("/user/addToCart", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteData = (token, id) =>
  API.delete(`/user/deleteCart/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const readData = (token) =>
  API.get("/user/retriveCart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
