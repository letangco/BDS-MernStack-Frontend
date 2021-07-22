import axios from 'axios';
import queryString from 'query-string';

import { USER_TOKEN } from '../utils/auth.util';
import { API_BASE_URL } from '../config/config';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // check sever side
  if (typeof window !== 'undefined') {
    // Handle token here ...
    const token = USER_TOKEN.get();
    if (token) {
      config.headers.Authorization = token;
    }
    // config formData
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
  }
  return config;
});

axiosClient.interceptors.response.use((response) => {
  // if (response.data.payload) {
  //   return response.data.payload;
  // }

  if (response.data) {
    return response.data;
  }

  return response;
}, (e) => {
  // Handle errors
  // eslint-disable-next-line no-throw-literal
  if (e.response.data.errors[0].param === 'VALUES_EXISTS') {
    throw e.response.data.errors[0].param;
  }
  if (e.response.data.errors[0].param === 'CAN_NOT_DELETE') {
    throw e.response.data.errors[0].param;
  } else {
    throw new Error('Lỗi server User');
  }
});

export default axiosClient;
