import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {openweatherIcons} from '../../assets/openweather_icons';
import {getDayName} from '../../utils/Forecast/getDayName';
import {weatherIcons} from '../../assets/weather_icons';

function DayForecast({date, day, time, temp, icon, pop}) {
  const dayName = getDayName(date);
  const timeValue = new Date(date).toTimeString().slice(0, 5);
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{(day && dayName) || (time && timeValue)}</Text>
      <View style={styles.iconContainer}>
        <Image
          source={weatherIcons[icon]}
          style={styles.weatherIcon}
        />
      </View>
      <Text style={styles.pop}>{pop}%</Text>
      <Text style={styles.temp}>{Math.round(temp)}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: COLORS.brandColor_ct500_16,
    aspectRatio: 1 / 2,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 1,
    margin: -17,
  },
  weatherIcon: {
    width: '60%',
    height: '60%',
  },
  day: {
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
  temp: {
    color: COLORS.brandColor900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  pop: {
    // marginTop: 7,
    marginBottom: -7,
    color: COLORS.brandColor400,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
});

export default DayForecast;
