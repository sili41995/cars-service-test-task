import { createAsyncThunk } from '@reduxjs/toolkit';
import carsServiceApi from 'service/carsServiceApi';
import { ICar, IFetchCarsOptions } from 'types/types';

export const fetchCars = createAsyncThunk<
  ICar[],
  IFetchCarsOptions,
  { rejectValue: string }
>(
  'cars/fetchAll',
  async (
    fetchOptions: IFetchCarsOptions,
    {
      rejectWithValue,
      signal,
    }: { rejectWithValue: Function; signal: AbortSignal }
  ) => {
    try {
      const response = await carsServiceApi.fetchCars({
        ...fetchOptions,
        signal,
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
