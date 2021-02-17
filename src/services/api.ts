import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://accenture-java-desafio.herokuapp.com",
});

export default api;
