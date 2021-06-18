import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});
