import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { ICarsState } from 'types/types';

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState.cars as ICarsState,
  reducers: {},
});

export default carsSlice.reducer;
