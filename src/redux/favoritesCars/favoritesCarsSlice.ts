import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { IFavoritesCarsState } from 'types/types';

const favoritesCarsSlice = createSlice({
  name: 'favoritesCars',
  initialState: initialState.favoritesCars as IFavoritesCarsState,
  reducers: {
    changeFavList: ({ ids }, { payload }) => {
      const nextState = { ...initialState.favoritesCars };
      if (ids) {
        const idIsPresent = ids.includes(payload);
        const filteredIds = ids.filter((item) => item !== payload);
        const updateIds = filteredIds.length
          ? filteredIds
          : initialState.favoritesCars.ids;
        nextState.ids = idIsPresent ? updateIds : [...ids, payload];
      } else {
        nextState.ids = [payload];
      }

      return nextState;
    },
  },
});

export const { changeFavList } = favoritesCarsSlice.actions;

export default favoritesCarsSlice.reducer;
