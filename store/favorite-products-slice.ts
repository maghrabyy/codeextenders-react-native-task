import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorage_key = 'favProds';

const saveToAsyncStorage = async (prodIds: string[]) => {
  try {
    await AsyncStorage.removeItem(asyncStorage_key);
    await AsyncStorage.setItem(asyncStorage_key, JSON.stringify(prodIds));
  } catch (error) {
    console.log(error);
  }
};

export const loadFromAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(asyncStorage_key);
    return value !== null ? JSON.parse(value) : [];
  } catch (error) {
    console.log(error);
  }
};

const initialState: string[] = [];
const favoriteProductsSlice = createSlice({
  name: 'favoriteProducts',
  initialState,
  reducers: {
    addProductToFavorite(state, action: PayloadAction<string>) {
      if (!state.includes(action.payload)) {
        const updatedState = [action.payload, ...state];
        saveToAsyncStorage(updatedState);
        return updatedState;
      }
    },
    removeProductFromFavorite(state, action: PayloadAction<string>) {
      const updatedState = state.filter((prodId) => action.payload !== prodId);

      saveToAsyncStorage(updatedState);
      return updatedState;
    },
    setFavoriteProducts(state, action: PayloadAction<string[]>) {
      state = action.payload;
      saveToAsyncStorage(state);
      return state;
    },
  },
});

export const {
  addProductToFavorite,
  removeProductFromFavorite,
  setFavoriteProducts,
} = favoriteProductsSlice.actions;

export const favoriteProductsReducer = favoriteProductsSlice.reducer;
