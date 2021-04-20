import axios from 'axios';
import { DOMAIN_NAME } from '../constraints/string';

export const base = axios.create({
  baseURL: DOMAIN_NAME,
});

base.interceptors.request.use(config => {
  if (config.url.includes('auth/realms')) {
    if (config.method == 'POST')
      config.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
  }

  return config;
});

base.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  },
);
