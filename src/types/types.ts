import { Dispatch, FormEvent, MouseEvent } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

export interface ICar {
  [key: string]: string | number | string[] | null;
  _id: string;
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

export interface ICarsState {
  items: ICar[] | null;
  isLoading: boolean;
  error: string | null;
  count: number | null;
}

export interface IFavoritesCarsState {
  ids: string[] | null;
}

export interface IState {
  cars: ICarsState;
  favoritesCars: IFavoritesCarsState;
}

export interface IFetchCarsOptions {
  page?: string;
  limit: string;
}

export interface IFetchCarResponse {
  adverts: ICar[];
  count: number;
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
  detailsCharacteristics: string[][];
  rental: string[];
}

export interface IUpdateSearchParamsProps {
  key: string;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: ({ key, value }: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface INavLink {
  href: string;
  title: string;
}

export type NavLinks = Readonly<INavLink[]>;

export interface IFilters {
  brand: string;
  price: string;
  mileageFrom: string;
  mileageTo: string;
}

export interface IFilteredCarsProps {
  cars: ICar[];
  filter: string;
}

export interface IGetPriceListProps {
  cars: ICar[] | null;
  step: number;
}

export interface IOnToggleMenuBtnClickProps {
  e: MouseEvent<HTMLButtonElement>;
  setState: Dispatch<React.SetStateAction<boolean>>;
}

export interface IOnMenuItemClick {
  e: FormEvent<HTMLInputElement>;
  name: string;
}

export interface IGetValueWithoutDelimiterProps {
  value: string;
  delimiter: string;
}

export interface IFilterCarsByMileageProps {
  cars: ICar[];
  mileageFrom: string;
  mileageTo: string;
}
