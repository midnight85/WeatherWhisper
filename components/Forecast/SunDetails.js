import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Sunset, Sunrise} from '../Icons';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';

function SunDetails({value, status}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.text}>{status}</Text>
      </View>
      {status === 'Sunrise' && (
        <Sunrise
          size={24}
          color={COLORS.secondaryColor700}
        />
      )}
      {status === 'Sunset' && (
        <Sunset
          size={24}
          color={COLORS.secondaryColor700}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryColor_ct300_12,
    aspectRatio: 2.22,
  },
  value: {
    color: COLORS.secondaryColor900,
    ...FONT_WEIGHT.semiBold,
    ...TEXT.subT1,
  },
  text: {
    color: COLORS.secondaryColor400,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
});

export default SunDetails;
