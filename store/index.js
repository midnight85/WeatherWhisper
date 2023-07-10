// import {configureStore} from '@reduxjs/toolkit';
// import {weatherApi} from './weatherApiSlice';
// import globalStateReducer from './globalStateSlice';
// import favoritesReducer from './favoritesSlice';
//
// const store = configureStore({
//   reducer: {
//     globalState: globalStateReducer,
//     favorites: favoritesReducer,
//     [weatherApi.reducerPath]: weatherApi.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(weatherApi.middleware),
// });
// export default store;
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {weatherApi} from './weatherApiSlice';
import globalStateReducer from './globalStateSlice';
import favoritesReducer from './favoritesSlice';
import recentSearchReducer from './recentSearch';

const reducers = combineReducers({
  globalState: globalStateReducer,
  favorites: favoritesReducer,
  recentSearch: recentSearchReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [weatherApi.reducerPath],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(weatherApi.middleware),
});
export let persistor = persistStore(store);
