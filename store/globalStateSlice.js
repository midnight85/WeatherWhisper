import {createSlice} from '@reduxjs/toolkit';

const globalState = createSlice({
  name: 'globalState',
  initialState: {
    // Country for main forecast
    selectedCountry: 'London',
    // For temperature in Fahrenheit use units=imperial
    // For temperature in Celsius use units=metric
    selectedUnits: 'metric',
    isMetricUnits: true,
    unitsModalVisible: false,
    locationModalVisible: false,
  },
  reducers: {
    setIsMetricUnits: (state, {payload}) => {
      state.isMetricUnits = payload;
    },
    setSelectedCountry: (state, {payload}) => {
      state.selectedCountry = payload;
    },
    setUnitsModalVisible: (state, {payload}) => {
      state.unitsModalVisible = payload;
    },
    setLocationModalVisible: (state, {payload}) => {
      state.locationModalVisible = payload;
    },
  },
});
export const {
  setIsMetricUnits,
  setSelectedCountry,
  setUnitsModalVisible,
  setLocationModalVisible,
} = globalState.actions;
export default globalState.reducer;
