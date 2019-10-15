import axios from 'axios';
import qs from 'qs';

const baseURL = process.env.VUE_APP_BASE_API;
const service = axios.create({
  baseURL,
  timeout: 60000, // request timeout  60s
  headers: {}
});

service.defaults.withCredentials = false; // true请求头带凭证cookie

// request interceptor
service.interceptors.request.use(
  async (config) => {
    // Do something before request is sent

    if (config.formData) {
      config.data = qs.stringify(config.data || config.formData);
    }

    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  (response) => {
    const { data, config } = response,
      { responseType } = config;

    // 如果响应类型是 blob 直接返回response 用来判断文件类型
    if (responseType === 'blob') {
      return response;
    }

    return data;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default service;
