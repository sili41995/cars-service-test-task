export interface ICar {
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

export interface IFavoritesCars {
  id: null;
  items: null;
}

export interface IState {
  cars: ICarsState;
  favoritesCars: IFavoritesCars;
}

//other
export interface IFetchCarsOptions {
  page?: string;
  limit?: string;
}

export interface IFetchCarsProps extends IFetchCarsOptions {
  signal: AbortSignal;
}

export interface IFetchCarProps {
  id: string;
  signal: AbortSignal;
}
