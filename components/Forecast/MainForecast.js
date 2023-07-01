import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS, TEXT, FONT_WEIGHT} from '../../constants/GlobalStyles';

function MainForecast({style}) {
  return (
    <View style={[styles.container, style && style]}>
      <View style={styles.leftColumn}>
        <Text style={styles.text}>Monday, May 15</Text>
        <View style={styles.tempContainer}>
          <View style={styles.temp}>
            <Text style={styles.tempText}>76</Text>
            <Text style={styles.degreeSymbol}>°</Text>
          </View>
          <Text style={styles.feelsText}>Feels like 81°</Text>
        </View>
        <Text style={styles.text}>60° / 86°</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.text}>°F</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/openweather_icons/02d.png')}
            style={styles.weatherIcon}
          />
        </View>
        <Text style={styles.iconDescription}>Clear</Text>
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
