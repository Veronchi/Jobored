import axios, { InternalAxiosRequestConfig } from 'axios';

const headers = {
  'x-secret-key': import.meta.env.VITE_X_SECRET_KEY,
  'X-Api-App-Id': import.meta.env.VITE_X_API_APP_ID,
};

const $host = axios.create({
  baseURL: 'https://startup-summer-proxy-production.up.railway.app/2.0/oauth2',
  headers,
});

const $authHost = axios.create({
  baseURL: 'https://startup-summer-proxy-production.up.railway.app/2.0',
  headers,
});

const authInterceptor = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const { headers } = config;
  const TOKEN = localStorage.getItem('token');

  headers.authorization = `${TOKEN}`;

  return {
    ...config,
    headers,
  };
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
