import { getCookie } from 'cookies-next';
import axios from 'axios';

const Authorization = getCookie('authentication');

export const api = axios.create({
  baseURL: '',
  headers: {
    Authorization: `Bearer ${Authorization}`,
  },
});
