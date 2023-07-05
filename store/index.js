import {configureStore} from '@reduxjs/toolkit';
import {weatherApi} from './weatherApiSlice';
import globalStateReducer from './globalStateSlice';

const store = configureStore({
  reducer: {
    globalState: globalStateReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
export default store;
