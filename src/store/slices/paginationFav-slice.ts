import { Pagination } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Pagination = {
  total: 0,
  count: 4,
  page: 1,
};

const paginationFavSlice = createSlice({
  name: 'paginationFav',
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setTotal: (state, { payload }: PayloadAction<number>) => {
      state.total = payload;
    },
    decPage: (state) => {
      if (state.page === 1) return state;
      state.page = state.page - 1;
    },
  },
});

export const { setPage, setTotal, decPage } = paginationFavSlice.actions;
export default paginationFavSlice.reducer;
