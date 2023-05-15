import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '@/components';
import { Favorites, SearchPage } from '@/pages';
import { Paths } from './utils/constants';

const { HOME, FAVORITES } = Paths;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route path={FAVORITES} element={<Favorites />}></Route>
    </Route>
  )
);
