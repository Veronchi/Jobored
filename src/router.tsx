import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '@/components';
import { EmptyStatePage, Favorites, SearchPage, VacancyPage } from '@/pages';
import { Paths } from './utils/constants';

const { HOME, FAVORITES, VACANCY, EMPTY_STATE } = Paths;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route path={`${VACANCY}/:id`} element={<VacancyPage />} />
      <Route path={FAVORITES} element={<Favorites />} />
      <Route path={EMPTY_STATE} element={<EmptyStatePage />} />
    </Route>
  )
);
