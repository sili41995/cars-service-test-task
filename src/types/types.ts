import { SearchParamsKeys } from 'constants/index';

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
  carCharacteristics: string[];
  otherCarCharacteristics: string[];
}

export interface IUpdateSearchParamsProps {
  searchParams: URLSearchParams;
  setSearchParams: (arg: URLSearchParams) => void;
  key: SearchParamsKeys;
  value: string;
}
