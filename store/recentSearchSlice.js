import {createSlice} from '@reduxjs/toolkit';

const recentSearchSlice = createSlice({
  name: 'recentSearch',
  initialState: [],
  reducers: {
    addItemToRecent: (state, {payload}) => {
      // if item exist, move to top
      const itemIndex = state.findIndex(
        recentItem => recentItem.url === payload.url,
      );
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
      state.push(payload);
      if (state.length > 5) {
        state.shift();
      }
    },
    removeItemFromRecent: (state, {payload}) => {
      return [...state.filter(item => item.url !== payload.url)];
    },
    cleanAllRecent: state => {
      return [];
    },
  },
});
export const {addItemToRecent, removeItemFromRecent, cleanAllRecent} =
  recentSearchSlice.actions;
export default recentSearchSlice.reducer;
