import { IState } from 'types/types';

const initialState: IState = {
  cars: {
    items: null,
    isLoading: false,
    error: null,
  },
  favoritesCars: {
    id: null,
  },
};

export default initialState;
