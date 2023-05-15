import { FC } from 'react';
import { Filters, VacancyList, SearchBar, PaginationBar } from '@/components';
import './search-page.scss';

export const SearchPage: FC = () => {
  return (
    <main className="search-page">
      <Filters />
      <div className="content">
        <SearchBar />
        <VacancyList />
        <PaginationBar />
      </div>
    </main>
  );
};
