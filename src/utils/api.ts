import axios from 'axios';
import Cookies from 'js-cookie';
export const BASE_URL: string = 'https://huesofchennai.azurewebsites.net/api';

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}[] = [];
const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        axiosInstance
          .post(`${BASE_URL}/v1/reset`, {
            refresh: Cookies.get('huesAccessToken'),
          })
          .then(({ data }) => {
            Cookies.set('huesAccessToken', data.access);
            Cookies.set('huesRefreshToken', data.refresh);

            axiosInstance.defaults.headers.common['Authorization'] =
              'Bearer ' + data.access;
            originalRequest.headers['Authorization'] = 'Bearer ' + data.access;
            processQueue(null, data.access);
            resolve(axiosInstance(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  },
);

function processQueue(error: any, token: string | null = null) {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token as string);
    }
  });
  failedQueue = [];
}

export const getAxios = () => {
  return axiosInstance;
};
