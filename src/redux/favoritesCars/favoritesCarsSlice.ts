import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { IFavoritesCarsState } from 'types/types';

const favoritesCarsSlice = createSlice({
  name: 'favoritesCars',
  initialState: initialState.favoritesCars as IFavoritesCarsState,
  reducers: {
    changeFavList: ({ id }, { payload }) => ({
      ...initialState.favoritesCars,
      id: id?.includes(payload)
        ? id?.filter((item) => item !== payload)
        : id
        ? [...id, payload]
        : [payload],
    }),
  },
});

export const { changeFavList } = favoritesCarsSlice.actions;

export default favoritesCarsSlice.reducer;
