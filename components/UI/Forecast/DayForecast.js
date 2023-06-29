import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../../constants/GlobalStyles';
import {openweatherIcons} from '../../../assets/openweather_icons';
import {getDayName} from '../../../utils/Forecast/getDayName';

function DayForecast({dt_txt, day, time, temp, icon}) {
  const dayName = getDayName(dt_txt, 3);
  const timeValue = new Date(dt_txt).toTimeString().slice(0, 5);
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{(day && dayName) || (time && timeValue)}</Text>
      <View style={styles.iconContainer}>
        <Image
          source={openweatherIcons[icon]}
          style={styles.weatherIcon}
        />
      </View>
      {time && <Text style={styles.pop}>10%</Text>}
      <Text style={styles.temp}>{temp}°</Text>
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
    width: '80%',
    aspectRatio: 1,
    margin: -14,
  },
  weatherIcon: {
    width: '100%',
    height: '100%',
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
    color: COLORS.brandColor400,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
});

export default DayForecast;
