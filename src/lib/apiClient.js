import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://platform.defymobile.com/api",
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "insomnia/9.2.0",
  },
});
