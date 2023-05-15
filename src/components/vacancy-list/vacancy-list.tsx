import { FC } from 'react';
import { Vacancy } from '..';
import { List } from '@mantine/core';

export const VacancyList: FC = () => {
  return (
    <List sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Vacancy />
      <Vacancy />
    </List>
  );
};
