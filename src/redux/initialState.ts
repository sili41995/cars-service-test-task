import { IState } from 'types/types';

const initialState: IState = {
  cars: {
    items: null,
    isLoading: false,
    error: null,
    count: null,
  },
  favoritesCars: {
    ids: null,
  },
};

export default initialState;
