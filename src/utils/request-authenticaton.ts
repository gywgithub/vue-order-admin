import axios from 'axios';
import {authFilter, authHeader, authRejectFilter} from '@/utils/auth-interceptor';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_MOVIE_API + 'api',
  timeout: 10000,
});

// request 拦截器
service.interceptors.request.use(
  authHeader,
  (error) => {
    // Handle request error here
    Promise.reject(error);
  },
);

// respone 拦截器
service.interceptors.response.use(
  authFilter,
  authRejectFilter,
);

export default service;
