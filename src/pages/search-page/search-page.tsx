import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import { Filters, VacancyList, SearchBar, PaginationBar } from '@/components';
import { Paths, override } from '@/utils/constants';
import { fetchAllVacancies, fetchCatalogues, fetchFilteredData } from '@/service/vacancies';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPage, setTotal } from '@/store/slices/pagination-slice';
import { setVacancies } from '@/store/slices/vacancies-slice';
import { SelectItem } from '@/utils/types';
import { IconPlus } from '@tabler/icons-react';
import { Accordion, Box, MediaQuery } from '@mantine/core';
import './search-page.scss';

export const SearchPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.pagination);
  const { objects } = useAppSelector((state) => state.vacancies);
  const { keyword, payment_from, payment_to, catalogues } = useAppSelector(
    (state) => state.filters
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectData, setSelectData] = useState<Array<SelectItem>>([]);

  const getVacancies = async (page: number) => {
    setIsLoading(true);
    const data = await fetchAllVacancies({ page, keyword, catalogues, payment_from, payment_to });

    if (data.objects.length) {
      dispatch(setVacancies(data));
      setIsLoading(false);
    } else {
      navigate(Paths.EMPTY_STATE, { replace: true, state: 'main' });
    }
  };

  const getCatalogues = async () => {
    setIsLoading(true);

    const data = await fetchCatalogues();
    const dataArr: Array<SelectItem> = data.map(({ key, title_rus }) => ({
      value: String(key),
      label: String(title_rus),
    }));

    setSelectData(dataArr);
    setIsLoading(false);
  };

  const handlePaginationClick = (page: number) => {
    dispatch(setPage(page));
    getVacancies(page);
  };

  const handleFilters = async () => {
    setIsLoading(true);
    const data = await fetchFilteredData({ page, keyword, catalogues, payment_from, payment_to });

    if (data.objects.length) {
      dispatch(setVacancies(data));
      dispatch(setPage(1));
      setIsLoading(false);

      if (data.total < 500) dispatch(setTotal(data.total));
    } else {
      navigate(Paths.EMPTY_STATE, { replace: true, state: 'main' });
    }
  };

  useEffect(() => {
    getCatalogues();
    getVacancies(page);
  }, []);

  if (isLoading) {
    return <SyncLoader cssOverride={override} color="#3b7cd3" size={25} />;
  }

  return (
    <main className="search-page">
      <MediaQuery query="(min-width: 721px)" styles={{ display: 'none' }}>
        <Accordion
          chevron={<IconPlus size="1rem" />}
          styles={{
            chevron: {
              '&[data-rotate]': {
                transform: 'rotate(45deg)',
              },
            },
            control: {
              fontSize: '16px',
            },
            content: {
              padding: 0,
            },
          }}
        >
          <Accordion.Item value="Фильтры">
            <Accordion.Control>Параметры фильтров</Accordion.Control>
            <Accordion.Panel>
              <Filters selectData={selectData} handleFilters={handleFilters} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </MediaQuery>

      <MediaQuery query="(max-width: 720px)" styles={{ display: 'none' }}>
        <Box>
          <Filters selectData={selectData} handleFilters={handleFilters} />
        </Box>
      </MediaQuery>

      <div className="content">
        <SearchBar handleSearch={handleFilters} />
        <VacancyList vacancies={objects} />
        <PaginationBar hadleClick={handlePaginationClick} />
      </div>
    </main>
  );
};
