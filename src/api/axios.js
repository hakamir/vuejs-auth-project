import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // headers: {
  //   'x-api-key': import.meta.env.VITE_TOKEN_API,
  //   'Accept': 'application/json'
  // }
});

instance.interceptors.request.use((config) => {
  config.headers["x-api-key"] = import.meta.env.VITE_TOKEN_API;
  return config;
});
