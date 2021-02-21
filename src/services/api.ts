import axios, { AxiosInstance } from "axios";
import { isAuth } from "./auth";

const api: AxiosInstance = axios.create({
  baseURL: "https://accenture-java-desafio.herokuapp.com",
});

const authDetails = isAuth();

api.defaults.headers.Authorization = authDetails.token;

export default api;
