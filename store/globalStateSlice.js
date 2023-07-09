import {createSlice} from '@reduxjs/toolkit';

const globalState = createSlice({
  name: 'globalState',
  initialState: {
    // Country for main forecast
    selectedCountry: {
      // country: 'Ukraine',
      // id: 2521868,
      // lat: 50.92,
      // lon: 34.78,
      // name: 'Sumy',
      // region: "Sums'ka Oblast'",
      // url: 'sumy-sumska-oblast-ukraine',
    },
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
