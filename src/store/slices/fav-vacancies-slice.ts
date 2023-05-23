import { getItemsFromLS } from '@/utils/getItemsFromLS';
import { VacancyObj } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const items = getItemsFromLS();

type favVacanciesState = {
  objects: Array<VacancyObj>;
  dataOnPage: Array<VacancyObj>;
};

const initialState: favVacanciesState = {
  objects: items || [],
  dataOnPage: [],
};

const favVacanciesSlice = createSlice({
  name: 'favVacancies',
  initialState,
  reducers: {
    setFavVacancies: (state, { payload }: PayloadAction<Array<VacancyObj>>) => {
      state.objects = payload;
    },
    setDataOnPage: (state, { payload }: PayloadAction<Array<VacancyObj>>) => {
      state.dataOnPage = payload;
    },
  },
});

export const { setFavVacancies, setDataOnPage } = favVacanciesSlice.actions;
export default favVacanciesSlice.reducer;
