import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../../constants/GlobalStyles';
import {openweatherIcons} from '../../../assets/openweather_icons';

function DayForecast({day, temp, icon}) {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <View style={styles.iconContainer}>
        <Image
          source={openweatherIcons[icon]}
          style={styles.weatherIcon}
        />
      </View>
      <Text style={styles.temp}>{temp}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: COLORS.brandColor_ct500_16,
  },
  iconContainer: {
    width: '80%',
    aspectRatio: 1,
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
});

export default DayForecast;
