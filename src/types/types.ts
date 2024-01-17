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
  error: null;
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
