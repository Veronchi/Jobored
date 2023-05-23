import { FC } from 'react';
import { Vacancy } from '..';
import { List } from '@mantine/core';
import { VacancyObj } from '@/utils/types';

type VacancyListProps = {
  vacancies: Array<VacancyObj>;
};

export const VacancyList: FC<VacancyListProps> = ({ vacancies }) => {
  return (
    <List
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '40px',
      }}
    >
      {vacancies.map((vacancy) => (
        <Vacancy key={vacancy.id} isLink={true} vacancy={vacancy} />
      ))}
    </List>
  );
};
