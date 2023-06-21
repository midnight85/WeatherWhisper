import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../../constants/GlobalStyles';

function WeatherDetails({icon: Icon, value, description}) {
  return (
    <View style={styles.container}>
      <Icon
        size={24}
        color={COLORS.neutralColors600}
      />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.brandColor_ct300_12,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 2,
    aspectRatio: 1,
  },
  value: {
    color: COLORS.brandColor900,
    ...FONT_WEIGHT.semiBold,
    ...TEXT.subT1,
  },
  description: {
    color: COLORS.neutralColors600,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
});

export default WeatherDetails;
