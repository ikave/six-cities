import { createSlice } from '@reduxjs/toolkit';
import { City, NameSpace, SortType } from '../../constants';
import { AppProcess } from '../../types/state';

const initialState: AppProcess = {
  currentCity: City.Paris,
  sortType: SortType.Popular,
};

const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { setCurrentCity, changeSortType } = appProcess.actions;

export default appProcess.reducer;
