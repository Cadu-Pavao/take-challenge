import axios from "axios";

export const HTTPClient = axios.create({
  baseURL: "http://www.mocky.io/v2/",
});

HTTPClient.interceptors.response.use(
  (resp) => resp,
  (error) => Promise.reject(error)
);
