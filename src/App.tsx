import { FC, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { SyncLoader } from 'react-spinners';
import { override } from './utils/constants';
import { auth } from './service/auth';
import { $authHost } from './service/axios';
import { InternalAxiosRequestConfig } from 'axios';

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onAuth = async () => {
    const data = await auth();

    const authInterceptor = async (
      config: InternalAxiosRequestConfig
    ): Promise<InternalAxiosRequestConfig> => {
      const { headers } = config;
      headers.authorization = `${data.token_type} ${data.access_token}`;

      return {
        ...config,
        headers,
      };
    };

    $authHost.interceptors.request.use(authInterceptor);

    setIsLoading(false);
  };

  useEffect(() => {
    onAuth();
  }, []);

  return isLoading ? (
    <SyncLoader cssOverride={override} color="#3b7cd3" size={25} />
  ) : (
    <RouterProvider router={router} />
  );
};
