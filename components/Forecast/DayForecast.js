import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {getDayName} from '../../utils/Forecast/getDayName';
import {weatherIcons} from '../../assets/weather_icons';

function DayForecast({date, day, time, temp, icon, pop}) {
  const dayName = getDayName(date);
  const timeValue = new Date(date).toTimeString().slice(0, 5);
  const isCurrentHour =
    new Date().toTimeString().slice(0, 2) === timeValue.slice(0, 2);
  return (
    <View
      style={[
        styles.container,
        time && isCurrentHour && {backgroundColor: COLORS.brandColor_ct500_16},
        day &&
          dayName === 'Today' && {backgroundColor: COLORS.brandColor_ct500_16},
        ,
      ]}>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: COLORS.brandColor_ct300_16,
    aspectRatio: 0.45,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    aspectRatio: 1,
    margin: -10,
  },
  weatherIcon: {
    width: '100%',
    height: '100%',
  },
  day: {
    marginBottom: 8,
    color: COLORS.neutralColors600,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
  temp: {
    color: COLORS.brandColor900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  pop: {
    marginTop: 10,
    color: COLORS.brandColor700,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
});

export default DayForecast;
