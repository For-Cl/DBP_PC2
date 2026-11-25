import axios, {axiosError, type InternalAxiosRequestConfig} from 'axios';
import constants from '../components/common/constants';

interface apiError{
    message?:string;
}

const api=axios.create({
    baseURL: constants.API_HOST,
    headers: {'Content-Type': 'application/json'},
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Obtener el token guardado en localStorage
    const token = localStorage.getItem('token');

    // Si existe un token, agregarlo al header Authorization
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: any) => response,
  (error: AxiosError<ApiError>) => {
    // Si el servidor responde con 401 (No autorizado)
    if (error.response?.status === 401) {
      // Limpiar datos de sesión
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redirigir al login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export default api;