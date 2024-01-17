import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { ICarsState } from 'types/types';

const favoritesCarsSlice = createSlice({
  name: 'favoritesCars',
  initialState: initialState.cars as ICarsState,
  reducers: {},
});

export default favoritesCarsSlice.reducer;
