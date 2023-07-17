import {createSlice} from '@reduxjs/toolkit';
// {
//   url: {
//     lastUpdate: 'date',
//       data: {},
//   },
// }
const offlineDataSlice = createSlice({
  name: 'offlineData',
  initialState: {},
  reducers: {
    setOfflineDataItem: (state, {payload}) => {
      const {url, data, date} = payload;
      if (!state.hasOwnProperty(url)) {
        state[url] = {
          date,
          data,
        };
      } else {
        state[url].date = date;
        state[url].data = data;
      }
    },
    resetOfflineData: state => {
      state = {};
    },
  },
});
export const {setOfflineDataItem, resetOfflineData} = offlineDataSlice.actions;
export default offlineDataSlice.reducer;
