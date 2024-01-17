import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import favoritesCarsReducer from './favoritesCars/favoritesCarsSlice';

const persistConfig = {
  key: 'favoritesCars',
  storage,
  whitelist: ['id'],
};

const persistedReducer = persistReducer(persistConfig, favoritesCarsReducer);

const rootReducer = combineReducers({
  cars: carsReducer,
  favoritesCars: persistedReducer,
});

export default rootReducer;
