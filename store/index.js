import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
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
import recentSearchReducer from './recentSearchSlice';
import offlineDataReducer from './offlineDataSlice';
import {setupListenersReactNative} from './setupListenersReactNative';

const reducers = combineReducers({
  globalState: globalStateReducer,
  favorites: favoritesReducer,
  recentSearch: recentSearchReducer,
  offlineData: offlineDataReducer,
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

setupListeners(setupListenersReactNative(store.dispatch));
