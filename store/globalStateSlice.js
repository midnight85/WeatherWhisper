import {createSlice} from '@reduxjs/toolkit';

const globalState = createSlice({
  name: 'globalState',
  initialState: {
    // Country for main forecast
    trackedCity: {},
    // For temperature in Fahrenheit use units=imperial
    // For temperature in Celsius use units=metric
    isMetricUnits: true,
    isNever_ask_againLocationPermission: false,
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
    setTrackedCity: (state, {payload}) => {
      state.trackedCity = payload;
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
  setTrackedCity,
  setIsNever_ask_againLocationPermission,
  setUnitsModalVisible,
  setLocationModalVisible,
} = globalState.actions;
export default globalState.reducer;
