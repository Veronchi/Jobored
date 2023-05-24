import { $host } from '@/service/axios';
import { AuthDataProps } from '@/utils/types';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

export const auth = async (): Promise<AuthDataProps | undefined> => {
  try {
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
  } catch (error) {
    if (error instanceof AxiosError) {
      notifications.show({
        title: `${error.response?.data.error.code}`,
        message: `${error.response?.data.error.message}`,
      });
    }
  }
};
