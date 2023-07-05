import {createSlice} from '@reduxjs/toolkit';

const globalState = createSlice({
  name: 'globalState',
  initialState: {
    // Country for main forecast
    selectedCountry: 'London',
    // For temperature in Fahrenheit use units=imperial
    // For temperature in Celsius use units=metric
    selectedUnits: 'metric',
  },
  reducers: {},
});

export const {} = globalState.reducer;