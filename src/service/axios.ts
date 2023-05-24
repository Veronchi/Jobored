import axios, { InternalAxiosRequestConfig } from 'axios';

const headers = {
  'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  'X-Api-App-Id':
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
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
