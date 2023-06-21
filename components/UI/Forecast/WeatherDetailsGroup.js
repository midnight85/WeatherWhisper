import React from 'react';
import {StyleSheet, View} from 'react-native';
import WeatherDetails from './WeatherDetails';
import {
  Cloud,
  HumidityPercentage,
  Precipitation,
  Pressure,
  Visibility,
  Wind,
} from '../../Icons';

function WeatherDetailsGroup({data}) {
  const weatherDetailsItems = {
    humidity: {
      icon: HumidityPercentage,
      description: 'Humidity',
      value: data?.humidity,
    },
    wind: {
      icon: Wind,
      description: 'Wind',
      value: data?.wind,
    },
    precipitation: {
      icon: Precipitation,
      description: 'Precipitation',
      value: data?.precipitation,
    },
    cloud: {
      icon: Cloud,
      description: 'Cloud',
      value: data?.cloud,
    },
    visibility: {
      icon: Visibility,
      description: 'Visibility',
      value: data?.visibility,
    },
    pressure: {
      icon: Pressure,
      description: 'Pressure',
      value: data?.pressure,
    },
  };

  return (
    <View style={styles.container}>
      {Object.keys(data).map((key, index) => (
        <WeatherDetails
          key={index}
          icon={weatherDetailsItems[key].icon}
          value={weatherDetailsItems[key].value}
          description={weatherDetailsItems[key].description}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 8,
  },
});

export default WeatherDetailsGroup;
