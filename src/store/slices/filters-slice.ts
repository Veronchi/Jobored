import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Filters = {
  keyword: string;
  catalogues: string;
  payment_from: string;
  payment_to: string;
};

const initialState: Filters = {
  keyword: '',
  catalogues: '',
  payment_from: '',
  payment_to: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.keyword = payload;
    },
    setSelect: (state, { payload }: PayloadAction<string>) => {
      state.catalogues = payload;
    },
    setSalaryFrom: (state, { payload }: PayloadAction<string>) => {
      state.payment_from = payload;
    },
    setSalaryTo: (state, { payload }: PayloadAction<string>) => {
      state.payment_to = payload;
    },
    removeFilters: () => initialState,
  },
});

export const { setSearch, setSelect, setSalaryFrom, setSalaryTo, removeFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
