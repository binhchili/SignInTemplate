import axios from 'axios';
import { Enviroment } from '../constraints/string';

export const base = axios.create({
  baseURL: Enviroment.DOMAIN_NAME,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

// base.interceptors.request.use(config => {
//   if (config.url.includes('auth/realms')) {
//     if (config.method == 'POST')
//       config.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
//   }

//   return config;
// });

