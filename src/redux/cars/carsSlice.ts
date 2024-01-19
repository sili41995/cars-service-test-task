import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { fetchCars } from './operations';
import { ICarsState } from 'types/types';
import { FetchParams } from 'constants/index';

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
        items: payload,
        isLastPage:
          !payload.length || payload.length < Number(FetchParams.limit),
      }))
      .addMatcher(isAnyOf(fetchCars.pending), (state) => ({
        ...state,
        isLoading: true,
      }))
      .addMatcher(isAnyOf(fetchCars.rejected), (state, { payload }) => ({
        ...state,
        isLoading: false,
        error: payload as string,
      }));
  },
});

export default carsSlice.reducer;
