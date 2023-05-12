import { FC } from 'react';
import { Button, MantineProvider, TextInput } from '@mantine/core';
import './search-bar.scss';
import { SearchIcon } from './search-icon';

export const SearchBar: FC = () => {
  return (
    <MantineProvider
      theme={{
        components: {
          TextInput: {
            classNames: {
              root: 'search',
              input: 'search__input',
              icon: 'search__icon',
              rightSection: 'search__right-section',
            },
          },
          Button: {
            classNames: { root: 'search__btn', label: 'label' },
          },
        },
      }}
    >
      <TextInput
        icon={<SearchIcon />}
        placeholder="Введите название вакансии"
        rightSection={<Button>Поиск</Button>}
      />
    </MantineProvider>
  );
};
