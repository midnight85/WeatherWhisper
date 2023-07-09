import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../constants/GlobalStyles';

function LocationTitle({name, country, region, style}) {
  return (
    <View style={style && style}>
      <Text style={styles.name}>{name}</Text>
      <View>
        <Text
          style={styles.country}
          numberOfLines={1}>
          {country}
          {region && `, ${region}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    flex: 1,
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  country: {
    color: COLORS.neutralColors700,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
});

export default LocationTitle;
