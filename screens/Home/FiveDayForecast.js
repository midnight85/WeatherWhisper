import React from 'react';
import {ScrollViewContainer} from '../../components/UI';
import DayForecast from '../../components/Forecast/DayForecast';
import DayForecastDropdown from '../../components/Forecast/DayForecastDropdown';
import {useGetForecastQuery} from '../../store/weatherApiSlice';
import {weatherApiData} from '../../data/WeatherApiData';
import {useSelector} from 'react-redux';
import DayForecastGroup from '../../components/Forecast/DayForecastGroup';
import {Loader} from '../../components';

//to do: avarage temp and status func
const data = [
  {
    dt_txt: '2023-07-01 21:00:00',
    main: 'Rain',
    icon: '04n',
    temp: '23',
  },
  {
    dt_txt: '2023-06-22 21:00:00',
    main: 'Clear',
    icon: '04d',
    temp: '19',
  },
  {
    dt_txt: '2023-06-23 21:00:00',
    main: 'Rain',
    icon: '10n',
    temp: '28',
  },
  {
    dt_txt: '2023-06-24 21:00:00',
    main: 'Clouds',
    icon: '03n',
    temp: '11',
  },
  {
    dt_txt: '2023-06-25 21:00:00',
    main: 'Rain',
    icon: '01d',
    temp: '24',
  },
];

function FiveDayForecast() {
  const {isMetricUnits, trackedCity} = useSelector(store => store.globalState);
  const {
    data: weatherApiData,
    isLoading,
    isError,
    error,
  } = useGetForecastQuery(trackedCity.url);
  const {forecastday} = weatherApiData.forecast;
  return (
    <ScrollViewContainer
      contentContainerStyle={{paddingHorizontal: 0, paddingTop: 8}}>
      {isLoading ? (
        <Loader style={{marginTop: 48}} />
      ) : (
        forecastday.map(day => (
          <DayForecastDropdown
            key={day.date}
            date={day.date}
            temp={isMetricUnits ? day.day.avgtemp_c : day.day.avgtemp_f}
            condition={day.day.condition.text}
            icon={day.day.condition.icon.split('64x64')[1]}>
            <DayForecastGroup>
              {day.hour.map(dayHour => (
                <DayForecast
                  key={dayHour.time}
                  time
                  temp={isMetricUnits ? dayHour.temp_c : dayHour.temp_f}
                  date={dayHour.time}
                  icon={dayHour.condition.icon.split('64x64')[1]}
                  pop={dayHour.chance_of_rain}
                />
              ))}
            </DayForecastGroup>
          </DayForecastDropdown>
        ))
      )}
    </ScrollViewContainer>
  );
}

export default FiveDayForecast;
