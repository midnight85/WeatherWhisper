import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {Check} from '../Icons';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';

function MenuItem({checked, text, leftIcon: LeftIcon, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [
        pressed && styles.pressed,
        styles.tempContainer,
        checked && {backgroundColor: COLORS.neutralColors_ct400_16},
      ]}
      onPress={onPress}>
      {LeftIcon && (
        <LeftIcon
          size={24}
          color={COLORS.neutralColors600}
        />
      )}
      <Text style={styles.text}>{text}</Text>
      {checked && (
        <Check
          size={24}
          color={COLORS.brandColor500}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    backgroundColor: COLORS.neutralColors_ct300_16,
  },
  tempContainer: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    columnGap: 12,
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
    color: COLORS.neutralColors900,
  },
});

export default MenuItem;
