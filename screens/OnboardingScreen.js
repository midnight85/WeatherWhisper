import React from 'react';
import {Text, StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/UI/Button';
import {COLORS} from '../constants/GlobalStyles';
import {
  SettingsOutlined,
  ChevronRight,
  User,
  HumidityPercentage,
  Wind,
  Precipitation,
  Cloud,
  Visibility,
  Pressure,
} from '../components/Icons';
import MainForecast from '../components/UI/Forecast/MainForecast';
import WeatherDetails from '../components/UI/Forecast/WeatherDetails';
import WeatherDetailsGroup from '../components/UI/Forecast/WeatherDetailsGroup';
import Title from '../components/UI/Title';
import SunDetails from '../components/UI/Forecast/SunDetails';
import PollutantDetails from '../components/UI/AirQuality/PollutantDetails';
import {pollutantDetailsData} from '../data/pollutantDetailsData';
import PollutantDetailsGroup from '../components/UI/AirQuality/PollutantDetailsGroup';
import IconButton from '../components/UI/IconButton';
import PollutantIndex from '../components/UI/AirQuality/PollutantIndex';
import {airPullution} from '../data/AirPullution';
import PollutantScale from '../components/UI/AirQuality/PollutantScale';
import PollutantScaleGroup from '../components/UI/AirQuality/PollutantScaleGroup';
import DayForecastGroup from '../components/UI/Forecast/DayForecastGroup';
import DayForecastDropdown from '../components/UI/Forecast/DayForecastDropdown';
import DayForecast from '../components/UI/Forecast/DayForecast';

function OnboardingScreen() {
  const navigation = useNavigation();

  const components = airPullution.list[0].components;

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        {/*<MainForecast />*/}
        {/*<WeatherDetailsGroup*/}
        {/*  data={{humidity: '6%', wind: '8 mph', precipitation: 'No'}}*/}
        {/*/>*/}
        {/*<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>*/}
        {/*  <Title text="Other days" />*/}
        {/*  <Button*/}
        {/*    text="5 days forecast"*/}
        {/*    rightIcon={ChevronRight}*/}
        {/*  />*/}
        {/*</View>*/}
        {/*<Title text="More details" />*/}
        {/*<WeatherDetailsGroup*/}
        {/*  data={{cloud: '0%', visibility: '31 mi', pressure: '30.10 in'}}*/}
        {/*/>*/}
        {/*<View style={{flexDirection: 'row', gap: 8}}>*/}
        {/*  <SunDetails*/}
        {/*    value="5:37"*/}
        {/*    status="Sunrise"*/}
        {/*  />*/}
        {/*  <SunDetails*/}
        {/*    value="21:14"*/}
        {/*    status="Sunset"*/}
        {/*  />*/}
        {/*</View>*/}
        {/*<PollutantDetailsGroup />*/}
        {/*<View style={{gap: 10}}>*/}
        {/*  <PollutantIndex index={1} />*/}
        {/*  <PollutantIndex index={2} />*/}
        {/*  <PollutantIndex index={3} />*/}
        {/*  <PollutantIndex index={4} />*/}
        {/*  <PollutantIndex index={5} />*/}
        {/*</View>*/}
        {/*<PollutantScaleGroup components={components} />*/}
        <DayForecastGroup>
          {[
            {dt_txt: '2023-06-21 21:00:00', icon: '04n', temp: '23'},
            {dt_txt: '2023-06-22 21:00:00', icon: '04d', temp: '19'},
            {dt_txt: '2023-06-23 21:00:00', icon: '10n', temp: '28'},
            {dt_txt: '2023-06-24 21:00:00', icon: '03n', temp: '11'},
            {dt_txt: '2023-06-25 21:00:00', icon: '01d', temp: '24'},
          ].map((item, index) => (
            <DayForecast
              key={index}
              day
              {...item}
            />
          ))}
        </DayForecastGroup>
        <View>
          {[
            {
              dt_txt: '2023-06-21 21:00:00',
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
          ].map((item, index) => {
            return (
              <DayForecastDropdown
                key={index}
                {...item}>
                <View
                  style={{
                    flexDirection: 'row',
                    columnGap: 8,
                  }}>
                  {[
                    {dt_txt: '2023-06-22 00:00:00', icon: '04n', temp: '23'},
                    {dt_txt: '2023-06-22 03:00:00', icon: '04d', temp: '19'},
                    {dt_txt: '2023-06-22 06:00:00', icon: '10n', temp: '28'},
                    {dt_txt: '2023-06-22 09:00:00', icon: '03n', temp: '11'},
                    {dt_txt: '2023-06-22 12:00:00', icon: '01d', temp: '24'},
                    {dt_txt: '2023-06-22 15:00:00', icon: '10n', temp: '14'},
                    {dt_txt: '2023-06-22 18:00:00', icon: '01d', temp: '24'},
                    {dt_txt: '2023-06-22 21:00:00', icon: '01d', temp: '32'},
                  ].map((item, index) => (
                    <DayForecast
                      key={index}
                      time
                      {...item}
                    />
                  ))}
                </View>
              </DayForecastDropdown>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 300,
    paddingHorizontal: 16,
    paddingTop: 54,
    paddingBottom: 54,
    rowGap: 20,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    // flexDirection: 'row',
    gap: 20,
  },
  wd: {
    flexDirection: 'row',
    columnGap: 8,
    marginTop: 8,
  },
});

export default OnboardingScreen;
// <View>
//   <Text>OnboardingScreen</Text>
//   <Button
//     title={'Go  to  tabs'}
//     onPress={() => navigation.navigate('Main')}
//   />
// </View>
