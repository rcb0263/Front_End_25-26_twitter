import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-p4-klvc.onrender.com",
  timeout: 100000,
  headers: {
    "x-nombre": "Rafael Ciordia"
  },
});

api.interceptors.request.use((config) => {
  const token = document.cookie
    .split("; ")
    .find(elem => elem.startsWith("token="))
    ?.split("=")[1];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});