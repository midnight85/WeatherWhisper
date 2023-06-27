import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import DayForecast from './DayForecast';

function DayForecastGroup() {
  // {day:'',icon:'',temp:''}
  const array = [
    {day: 'Sun', icon: '04n', temp: '23'},
    {day: 'Mon', icon: '04d', temp: '19'},
    {day: 'Tue', icon: '10n', temp: '28'},
    {day: 'Wed', icon: '03n', temp: '11'},
    {day: 'Thu', icon: '01d', temp: '24'},
  ];
  //{day,icon,temp
  return (
    <View style={styles.container}>
      {array?.map((item, index) => (
        <DayForecast
          key={index}
          {...item}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 8,
  },
});

export default DayForecastGroup;
