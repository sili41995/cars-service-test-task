import { IState } from 'types/types';

export const selectCars = (state: IState) => state.cars.items;

export const selectError = (state: IState) => state.cars.error;

export const selectIsLoading = (state: IState) => state.cars.isLoading;
