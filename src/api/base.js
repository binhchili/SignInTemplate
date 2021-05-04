import axios from 'axios';
import { Enviroment } from '../constraints/string';

export const base = axios.create({
  baseURL: Enviroment.DOMAIN_NAME,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});



