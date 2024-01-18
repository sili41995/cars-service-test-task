import { IState } from 'types/types';

export const selectFavoritesCars = (state: IState) => state.favoritesCars.id;
