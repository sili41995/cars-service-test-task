import { IState } from 'types/types';

const initialState: IState = {
  cars: {
    items: null,
    isLoading: false,
    error: null,
  },
  favoritesCars: {
    id: null,
    items: null,
  },
};

export default initialState;
