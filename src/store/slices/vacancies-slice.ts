import { DataObject } from '@/utils/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: DataObject = {
  objects: [],
  total: 500,
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setVacancies: (state, { payload }: PayloadAction<DataObject>) => {
      state.objects = payload.objects;
    },
  },
});

export const { setVacancies } = vacanciesSlice.actions;
export default vacanciesSlice.reducer;
