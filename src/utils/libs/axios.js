import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_API_URL } from '../config'; 
import { useAuthStore } from '../../components/auth/store/authStore';

export const api = axios.create({
  baseURL: BASE_API_URL, 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true, 
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));


api.interceptors.response.use(
  (response) => {
    if (response.data.requireDb) {
      response.headers['x-database'] = response.data.dbName;
    }
    return response;
  },
  (error) => {
    const logout = useAuthStore.getState().logout;

    if (error.response) {
      if (error.response.status === 401) {
        logout();
        toast.error('Sesión expirada. Inicie sesión nuevamente.');
      } else {
        toast.error(error.response.data.message || 'Error del servidor');
      }
    } else if (error.request) {
      toast.error('Error de conexión. Verifica la configuración CORS del servidor.');
    } else {
      toast.error('Error en la solicitud.');
    }

    return Promise.reject(error);
  }
);

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];  
  const res = await api.get(url, { ...config });
  return res.data;
};
