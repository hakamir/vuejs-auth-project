import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'api-token': import.meta.env.VITE_TOKEN_API,
    'Accept': 'application/json'
  }
});