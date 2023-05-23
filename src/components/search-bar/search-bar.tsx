import { FC, ChangeEvent } from 'react';
import { Button, MantineProvider, TextInput } from '@mantine/core';
import { SearchIcon } from './search-icon';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSearch } from '@/store/slices/filters-slice';
import './search-bar.scss';

type SearchProps = {
  handleSearch: () => void;
};

export const SearchBar: FC<SearchProps> = ({ handleSearch }) => {
  const dispatch = useAppDispatch();
  const { keyword } = useAppSelector((state) => state.filters);

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSearchSubmit = () => {
    handleSearch();
  };

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
            classNames: { root: 'search__btn' },
          },
        },
      }}
    >
      <TextInput
        data-elem="search-input"
        icon={<SearchIcon />}
        onChange={(e) => handleInputSearch(e)}
        value={keyword}
        placeholder="Введите название вакансии"
        rightSection={
          <Button data-elem="search-button" onClick={handleSearchSubmit}>
            Поиск
          </Button>
        }
      />
    </MantineProvider>
  );
};
