import axios from "axios";
import Cookies from "js-cookie";
export const apiClient = axios.create({
  baseURL: "https://platform.defymobile.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = Cookies.get("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
