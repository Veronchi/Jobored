import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from './slices/vacancies-slice';
import favVacanciesReducer from './slices/fav-vacancies-slice';
import paginationReducer from './slices/pagination-slice';
import paginationFavReducer from './slices/paginationFav-slice';
import filtersReducer from './slices/filters-slice';

export const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
    favVacancies: favVacanciesReducer,
    pagination: paginationReducer,
    paginationFav: paginationFavReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
