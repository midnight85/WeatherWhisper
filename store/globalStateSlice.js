import {createSlice} from '@reduxjs/toolkit';

const globalState = createSlice({
  name: 'globalState',
  initialState: {
    // Country for main forecast
    selectedCountry: {},
    // For temperature in Fahrenheit use units=imperial
    // For temperature in Celsius use units=metric
    selectedUnits: 'metric',
    isMetricUnits: true,
    isNever_ask_againLocationPermission: false,
    // move to state
    unitsModalVisible: false,
    locationModalVisible: false,
  },
  reducers: {
    setIsNever_ask_againLocationPermission: (state, {payload}) => {
      state.isNever_ask_againLocationPermission = payload;
    },
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
  setIsNever_ask_againLocationPermission,
  setUnitsModalVisible,
  setLocationModalVisible,
} = globalState.actions;
export default globalState.reducer;
