import axios from 'axios';

export const BASE_URL: string = 'https://huesofchennai.azurewebsites.net/api';

let isRefreshing = false;
let failedQueue: { resolve: (token: string) => void; reject: (error: any) => void; }[] = [];

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function(resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axios(originalRequest);
        }).catch((err) => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function(resolve, reject) {
        axios.post('/refreshTokenEndpoint', {
          refreshToken: localStorage.getItem('refreshToken')
        }).then(({ data }) => {
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken;
          originalRequest.headers['Authorization'] = 'Bearer ' + data.accessToken;
          processQueue(null, data.accessToken);
          resolve(axios(originalRequest));
        }).catch((err) => {
          processQueue(err, null);
          reject(err);
        }).then(() => {
          isRefreshing = false;
        });
      });
    }

    return Promise.reject(error);
  }
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