import axios from "axios";

const baseUrl = "http://localhost:1337";
const API = axios.create({ baseURL: baseUrl });

export const createFilmInformation = ({ formData }) => {
  return API.post("/blue/films", formData);
};

export const getFilmInformation = () => {
  return API.get("/blue/films");
};
export const deleteFilmInformation = ({ id }) => {
  return API.delete(`/blue/films/${id}`);
};
export const updateFilmInformation = ({ id, formData }) => {
  return API.patch(`/blue/films/${id}`, formData);
};

export const createNewDocFilmMamager = ({ formData }) => {
  return API.post("/blue/filmManager", formData);
};
export const getFilmManagerInformation = () => {
  return API.get("/blue/filmManager");
};
export const deleteFilmManagerInformation = ({ id }) => {
  return API.delete(`/blue/filmManager/${id}`);
};
export const updateFilmManagerInformation = ({ id, formData }) => {
  return API.patch(`/blue/filmManager/${id}`, formData);
};



export const createFoodInformation = ({ formData }) => {
  return API.post("/blue/food", formData);
}
export const getFoodInformation = ()=>{
  return API.get("/blue/food")
}
export const deleteFoodInformation = ({ id }) => {
  return API.delete(`/blue/food/${id}`);
};
export const updateFoodInformation = ({ id, formData }) => {
  return API.patch(`/blue/food/${id}`, formData);
};
export const getDataForDashBoard = () => {
  return API.post(`/dashBoard/getDataForDashBoard`);
};
export const getDataforTicketManager = () => {
  return API.get(`/dashBoard/getDataforTicketManager`);
};


