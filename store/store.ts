import { configureStore } from '@reduxjs/toolkit';
import {
  favoriteProductsReducer,
  setFavoriteProducts,
} from './favorite-products-slice';
import { loadFromAsyncStorage } from './favorite-products-slice';

export const store = configureStore({ reducer: { favoriteProductsReducer } });

const initializeStore = async () => {
  const counterValue = await loadFromAsyncStorage();
  store.dispatch(setFavoriteProducts(counterValue));
};

initializeStore();

export type RootState = ReturnType<typeof store.getState>;
