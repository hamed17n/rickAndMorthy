import axios from "axios";

import { CONNECTION_ERROR } from "constants/errors";
import { host } from "utils/config";

export const api = axios.create({ baseURL: host });

api.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    window.alert(CONNECTION_ERROR);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  async function (response) {
    return response.data;
  },
  function (error: any) {
    return Promise.reject(error.response.data);
  },
);

export const get = api.get;
export const post = api.post;
export const put = api.put;
export const remove = api.delete;
