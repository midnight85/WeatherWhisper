import {createSlice} from '@reduxjs/toolkit';

const favorites = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addCountryToFavorite: (state, {payload}) => {
      if (state.some(favoriteItem => favoriteItem.url === payload.url)) {
        return state;
      }
      state.push(payload);
    },
    removeCountryFromFavorite: (state, {payload}) => {
      return [...state.filter(item => item.url !== payload.url)];
    },
    removeLastAddedCountry: state => {
      state.pop();
    },
    cleanAllFavorites: state => {
      return [];
    },
  },
});
export const {
  addCountryToFavorite,
  removeCountryFromFavorite,
  removeLastAddedCountry,
  cleanAllFavorites,
} = favorites.actions;
export default favorites.reducer;
