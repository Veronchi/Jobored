import { FC } from 'react';
import './favorites-page.scss';
import { PaginationBar, VacancyList } from '@/components';

export const Favorites: FC = () => {
  return (
    <main className="favorites">
      <VacancyList />
      <PaginationBar />
    </main>
  );
};
