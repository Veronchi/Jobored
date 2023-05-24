import { AuthDataProps } from './types';

export const removeCredentials = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('ttl');
};

export const setCredentials = (data: AuthDataProps) => {
  localStorage.setItem('ttl', `${data.ttl}`);
  localStorage.setItem('token', `${data.token_type} ${data.access_token}`);
  localStorage.setItem('items', JSON.stringify([]));
};
