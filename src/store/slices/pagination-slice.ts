import { Pagination } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Pagination = {
  total: 500,
  count: 4,
  page: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setTotal: (state, { payload }: PayloadAction<number>) => {
      state.total = payload;
    },
    resetTotal: (state) => {
      state.total = initialState.total;
    },
  },
});

export const { setPage, setTotal, resetTotal } = paginationSlice.actions;
export default paginationSlice.reducer;
