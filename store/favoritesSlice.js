import {createSlice} from '@reduxjs/toolkit';

const favorites = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addCityToFavorite: (state, {payload}) => {
      if (state.some(favoriteItem => favoriteItem.url === payload.url)) {
        return state;
      }
      state.push(payload);
    },
    removeCityFromFavorite: (state, {payload}) => {
      return [...state.filter(item => item.url !== payload.url)];
    },
    removeSelectedFromFavorite: (state, {payload}) => {
      return state.filter(item => {
        return !payload.some(selectedItem => selectedItem.id === item.id);
      });
    },
    removeLastAddedCity: state => {
      state.pop();
    },
    cleanAllFavorites: state => {
      return [];
    },
  },
});
export const {
  addCityToFavorite,
  removeCityFromFavorite,
  removeSelectedFromFavorite,
  removeLastAddedCity,
  cleanAllFavorites,
} = favorites.actions;
export default favorites.reducer;
