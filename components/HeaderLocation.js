import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {ChevronRight, Location} from './Icons';
import {COLORS, FONT_WEIGHT, TEXT} from '../constants/GlobalStyles';

function HeaderLocation({location, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}>
      <Location
        size={24}
        color={COLORS.neutralColors600}
      />
      <Text style={styles.text}>{location}</Text>
      <ChevronRight
        size={24}
        color={COLORS.neutralColors600}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  text: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  pressed: {
    opacity: 0.6,
  },
});

export default HeaderLocation;
