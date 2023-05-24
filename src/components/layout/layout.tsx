import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { SyncLoader } from 'react-spinners';
import { override } from '@/utils/constants';
import { auth } from '@/service/auth';

export const Layout: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onAuth = async () => {
    const ttl = localStorage.getItem('ttl');

    if (ttl) {
      const isExp = +ttl < Math.floor(Date.now() / 1000);

      if (isExp) {
        const data = await auth();

        localStorage.setItem('ttl', `${data.ttl}`);
        localStorage.setItem('token', `${data.token_type} ${data.access_token}`);
      }
    } else {
      const data = await auth();

      localStorage.setItem('ttl', `${data.ttl}`);
      localStorage.setItem('token', `${data.token_type} ${data.access_token}`);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    onAuth();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? <SyncLoader cssOverride={override} color="#3b7cd3" size={25} /> : <Outlet />}
    </>
  );
};
