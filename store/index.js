import {configureStore} from '@reduxjs/toolkit';
import {weatherApi} from './weatherApiSlice';

const store = configureStore({
  reducer: {
    // todos: todoReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
export default store;
