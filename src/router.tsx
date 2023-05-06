import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '@/components';
import { Home } from '@/pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);
