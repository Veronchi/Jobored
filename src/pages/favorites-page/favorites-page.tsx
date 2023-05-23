import { FC, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PaginationBar, VacancyList } from '@/components';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { VacancyObj } from '@/utils/types';
import { setPage, setTotal } from '@/store/slices/paginationFav-slice';
import { Paths } from '@/utils/constants';
import { getItemsFromLS } from '@/utils/getItemsFromLS';
import './favorites-page.scss';

export const Favorites: FC = () => {
  const { page, total } = useAppSelector((state) => state.paginationFav);
  const { objects } = useAppSelector((state) => state.favVacancies);
  const [dataOnPage, setDataOnPage] = useState<Array<VacancyObj>>([]);
  const dispatch = useAppDispatch();

  const handlePaginationClick = (page: number) => {
    dispatch(setPage(page));
  };

  useEffect(() => {
    const list = getItemsFromLS();

    list && dispatch(setTotal(list.length));

    const start = (page - 1) * 4;
    const end = Math.min(page * 4, objects.length);

    setDataOnPage(objects.slice(start, end));
  }, [page, objects, dispatch]);

  return (
    <main className="favorites">
      {objects.length ? (
        <>
          <VacancyList vacancies={dataOnPage} />
          <PaginationBar hadleClick={handlePaginationClick} totalAmount={total} />
        </>
      ) : (
        <Navigate to={Paths.EMPTY_STATE} replace />
      )}
    </main>
  );
};
