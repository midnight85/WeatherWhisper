import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {WEATHER_API_KEY} from '@env';

export const weatherApi = createApi({
  name: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.weatherapi.com/v1',
    headers: {
      key: WEATHER_API_KEY,
    },
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: builder => ({
    getForecast: builder.query({
      query: queryName => ({
        url: '/forecast.json',
        params: {
          q: queryName,
          days: '5',
          aqi: 'yes',
          alerts: 'no',
        },
      }),
    }),
    getCurrent: builder.query({
      query: queryName => ({
        url: '/current.json',
        params: {
          q: queryName,
          aqi: 'no',
        },
      }),
    }),
    getSearch: builder.query({
      query: queryName => ({
        url: '/search.json',
        params: {
          q: queryName,
        },
      }),
    }),
  }),
});

export const {
  useGetForecastQuery,
  useLazyGetForecastQuery,
  useGetCurrentQuery,
  useLazyGetCurrentQuery,
  useGetSearchQuery,
  useLazyGetSearchQuery,
} = weatherApi;
