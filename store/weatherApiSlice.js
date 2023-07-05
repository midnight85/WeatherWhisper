import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {WEATHER_API_KEY} from '@env';

export const weatherApi = createApi({
  name: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.weatherapi.com/v1',
    headers: {
      key: WEATHER_API_KEY,
    },
  }),
  endpoints: builder => ({
    getForecast: builder.query({
      query: () => ({
        url: '/forecast.json',
        params: {
          q: 'Lypova',
          days: '7',
          aqi: 'yes',
          alerts: 'no',
        },
      }),
    }),
  }),
});

export const {useGetForecastQuery} = weatherApi;
