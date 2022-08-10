/*
 * @Author: dujiang
 * @Date: 2022-01-10 16:24:35
 * @LastEditTime: 2022-01-11 21:08:16
 * @LastEditors: dujiang
 * @Description:
 */
import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", //请求后端数据的基本地址，自定义
  // timeout: 2000
  // timeout: 10 * 1000,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export interface AxiosConfig extends AxiosRequestConfig {
  headers?: AxiosRequestHeaders;
}

export { instance };

interface Response {
  result?: number;
  code?: string | number;
  msg?: string;
}

const errorHandler = (error: Error) => {
  throw error;
};

const responseHandler = (response: AxiosResponse<Response>) => {
  return new Promise((resolve, reject) => {
    const body = response.data;
    if (body.result !== 1 && body.code !== "E1") {
      reject(body);
    } else {
      resolve(body);
    }
  }).then(null, errorHandler);
};

instance.interceptors.response.use(responseHandler);

export const get = <T, P = Record<string, unknown>>(
  url: string,
  params?: P,
  config?: AxiosConfig
) => {
  return instance.get<T>(url, { params, ...config });
};

export const post = <T, P = Record<string, unknown>>(
  url: string,
  params?: P,
  config?: AxiosConfig
) => {
  return instance.post<T>(url, params, config);
};

export const put = <T, P = Record<string, unknown>>(
  url: string,
  params?: P,
  config?: AxiosConfig
) => {
  return instance.put<T>(url, params, config);
};

export const del = <T, P = Record<string, unknown>>(
  url: string,
  params?: P,
  config?: AxiosConfig
) => {
  return instance.delete<T>(url, { params, ...config });
};
