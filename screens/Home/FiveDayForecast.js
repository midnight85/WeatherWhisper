import React from 'react';
import {ScrollViewContainer} from '../../components/UI';
import DayForecast from '../../components/Forecast/DayForecast';
import DayForecastDropdown from '../../components/Forecast/DayForecastDropdown';
import {useGetForecastQuery} from '../../store/weatherApiSlice';
import {useSelector} from 'react-redux';
import DayForecastGroup from '../../components/Forecast/DayForecastGroup';
import {Loader} from '../../components';

function FiveDayForecast() {
  const {isMetricUnits, trackedCity} = useSelector(store => store.globalState);
  const {
    data: weatherApiData,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetForecastQuery(trackedCity.url);
  const {forecastday} = weatherApiData.forecast;
  return (
    <ScrollViewContainer
      contentContainerStyle={{paddingHorizontal: 0, paddingTop: 8}}>
      {isLoading || isFetching ? (
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
