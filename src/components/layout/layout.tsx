import { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '@/components';
import { SyncLoader } from 'react-spinners';
import { Paths, override } from '@/utils/constants';
import { auth } from '@/service/auth';
import { removeCredentials, setCredentials } from '@/utils/handleCredentials';

export const Layout: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const onAuth = async () => {
    const ttl = localStorage.getItem('ttl');

    if (ttl) {
      const isExp = +ttl < Math.floor(Date.now() / 1000);

      if (isExp) {
        const data = await auth();

        if (data) {
          setCredentials(data);
        } else {
          removeCredentials();
          navigate(`/${Paths.EMPTY_STATE}`, { replace: true, state: 'main' });
        }
      }
    } else {
      const data = await auth();
      if (data) {
        setCredentials(data);
      } else {
        removeCredentials();
        navigate(`/${Paths.EMPTY_STATE}`, { replace: true, state: 'main' });
      }
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
