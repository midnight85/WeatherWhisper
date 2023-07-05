import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS, TEXT, FONT_WEIGHT} from '../../constants/GlobalStyles';
import {weatherIcons} from '../../assets/weather_icons';

function MainForecast({
  localtime,
  isMetricUnits,
  temp,
  maxtemp,
  mintemp,
  feelslike,
  condition_text,
  icon,
  style,
}) {
  const [day, month, date] = new Date(localtime).toDateString().split(' ');
  return (
    <View style={[styles.container, style && style]}>
      <View style={styles.leftColumn}>
        <Text style={styles.text}>
          {day}, {month} {date}
        </Text>
        <View style={styles.tempContainer}>
          <View style={styles.temp}>
            <Text style={styles.tempText}>{Math.round(temp)}</Text>
            <Text style={styles.degreeSymbol}>°</Text>
          </View>
          <Text style={styles.feelsText}>
            Feels like {Math.round(feelslike)}°
          </Text>
        </View>
        <Text style={styles.text}>
          {Math.round(mintemp)}° / {Math.round(maxtemp)}°
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.text}>°{isMetricUnits ? 'C' : 'F'}</Text>
        <View style={styles.iconContainer}>
          <Image
            source={weatherIcons[icon]}
            style={styles.weatherIcon}
          />
        </View>
        <Text style={styles.iconDescription}>{condition_text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    borderRadius: 16,
    backgroundColor: COLORS.brandColor_ct500_16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    rowGap: 20,
    justifyContent: 'space-between',
  },
  rightColumn: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  tempContainer: {
    gap: -8,
  },
  text: {
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
    color: COLORS.neutralColors600,
  },
  temp: {
    flexDirection: 'row',
  },
  tempText: {
    ...FONT_WEIGHT.medium,
    ...TEXT.h3,
    color: COLORS.brandColor900,
  },
  degreeSymbol: {
    color: COLORS.neutralColors700,
    ...FONT_WEIGHT.bold,
    fontSize: 18,
    marginTop: 6,
  },
  feelsText: {
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
    color: COLORS.neutralColors700,
  },
  weatherIcon: {
    width: '100%',
    height: '100%',
  },
  iconDescription: {
    ...FONT_WEIGHT.semiBold,
    ...TEXT.subT2,
    color: COLORS.neutralColors700,
  },
  iconContainer: {
    width: 80,
    height: 80,
    marginHorizontal: -18,
  },
});

export default MainForecast;
