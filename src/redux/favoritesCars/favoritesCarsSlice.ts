import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { IFavoritesCarsState } from 'types/types';

const favoritesCarsSlice = createSlice({
  name: 'favoritesCars',
  initialState: initialState.favoritesCars as IFavoritesCarsState,
  reducers: {},
});
export default favoritesCarsSlice.reducer;
