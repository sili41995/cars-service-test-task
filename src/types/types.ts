import { SearchParamsKeys } from 'constants/index';
import { SetURLSearchParams } from 'react-router-dom';

export interface ICar {
  [key: string]: string | number | string[] | null;
  id: string;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string | null;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

//state

export interface ICarsState {
  items: ICar[] | null;
  isLoading: boolean;
  error: string | null;
}

export interface IFavoritesCarsState {
  id: string[] | null;
}

export interface IState {
  cars: ICarsState;
  favoritesCars: IFavoritesCarsState;
}

//other
export interface IFetchCarsOptions {
  page?: string;
  limit: string;
}

export interface IFetchCarsProps extends IFetchCarsOptions {
  signal: AbortSignal;
}

export interface IFetchCarProps {
  id: string;
  signal: AbortSignal;
}

export interface ICarInfo {
  carImg: string;
  carImgDesc: string;
  functionalities: string[][];
}

export interface IUpdateSearchParamsProps {
  key: SearchParamsKeys;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: ({ key, value }: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}
