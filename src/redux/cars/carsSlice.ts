import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { fetchCars } from './operations';
import { ICarsState } from 'types/types';

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState.cars as ICarsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: initialState.cars.error,
        items: payload.adverts,
        count: payload.count,
      }))
      .addMatcher(isAnyOf(fetchCars.pending), (state) => ({
        ...state,
        isLoading: true,
      }))
      .addMatcher(isAnyOf(fetchCars.rejected), (state, { payload, error }) => ({
        ...state,
        isLoading: false,
        error: error.message || (payload as string),
      }));
  },
});

export default carsSlice.reducer;
