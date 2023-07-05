import React from 'react';
import {View} from 'react-native';
import {AQI_DETAILS, FIVE_DAY_FORECAST} from '../../constants/ScreenNames';
import {
  ScrollViewContainer,
  Title,
  Button,
  ProvidedBy,
} from '../../components/UI';
import {
  DayForecast,
  DayForecastGroup,
  MainForecast,
  SunDetails,
  WeatherDetailsGroup,
} from '../../components/Forecast';
import {ChevronRight} from '../../components/Icons';
import {PollutantIndex} from '../../components/AirQuality';
import {useGetForecastQuery} from '../../store/weatherApiSlice';
import {weatherApiData} from '../../data/WeatherApiData';

const dayForecastData = [
  {dt_txt: '2023-06-21 21:00:00', icon: '04n', temp: '23'},
  {dt_txt: '2023-06-22 21:00:00', icon: '04d', temp: '19'},
  {dt_txt: '2023-06-23 21:00:00', icon: '10n', temp: '28'},
  {dt_txt: '2023-06-24 21:00:00', icon: '03n', temp: '11'},
  {dt_txt: '2023-06-25 21:00:00', icon: '01d', temp: '24'},
];

function HomeScreen({navigation}) {
  // const {data: data1} = useGetForecastQuery();
  // weatherApiData
  return (
    <ScrollViewContainer>
      <MainForecast style={{marginBottom: 8}} />
      <WeatherDetailsGroup
        style={{marginBottom: 24}}
        data={{humidity: '6%', wind: '8 mph', precipitation: 'No'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
        <Title text="Other days" />
        <Button
          text="5 days forecast"
          rightIcon={ChevronRight}
          onPress={() => navigation.navigate(FIVE_DAY_FORECAST)}
        />
      </View>
      <DayForecastGroup>
        {dayForecastData.map((item, index) => (
          <DayForecast
            key={index}
            day
            {...item}
          />
        ))}
      </DayForecastGroup>
      <Title
        text="More details"
        style={{marginBottom: 16, marginTop: 24}}
      />
      <WeatherDetailsGroup
        style={{marginBottom: 8}}
        data={{cloud: '0%', visibility: '31 mi', pressure: '30.10 in'}}
      />
      <View style={{flexDirection: 'row', gap: 8}}>
        <SunDetails
          value="5:37"
          status="Sunrise"
        />
        <SunDetails
          value="21:14"
          status="Sunset"
        />
      </View>
      <Title
        text="Air quality"
        style={{marginBottom: 16, marginTop: 24}}
      />
      <PollutantIndex
        index={1}
        style={{marginBottom: 24}}
      />
      <Button
        text={'Show details'}
        outlined
        onPress={() => navigation.navigate(AQI_DETAILS)}
      />
      <ProvidedBy
        dataText="Weather data"
        source="OpenWeather"
        url="https://openweathermap.org/"
        style={{marginBottom: 24, marginTop: 56, textAlign: 'center'}}
      />
    </ScrollViewContainer>
  );
}

export default HomeScreen;
