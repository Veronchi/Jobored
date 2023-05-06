import { Filters, JobList, Search } from '@/components';
import { FC } from 'react';
import './home.scss';

export const Home: FC = () => {
  return (
    <main className="main">
      <Filters />
      <div className="content">
        <Search />
        <JobList />
      </div>
    </main>
  );
};
