import { $host } from '@/service/axios';
import { AuthDataProps } from '@/utils/types';

export const auth = async (): Promise<AuthDataProps> => {
  const { data } = await $host.get('/password', {
    params: {
      login: import.meta.env.VITE_LOGIN,
      password: import.meta.env.VITE_PASSWORD,
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      hr: import.meta.env.VITE_HR,
    },
  });

  return data;
};
