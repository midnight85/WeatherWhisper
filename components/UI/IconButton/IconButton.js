import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {COLORS} from '../../../constants/GlobalStyles';

function IconButton({
  icon: IconComponent,
  onPress,
  size,
  color,
  type,
  background,
  disabled,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styles.container,
        type === 'filled' && styles.filled,
        type === 'outlined' && styles.outlined,
        background && {backgroundColor: background},
        pressed
          ? type === 'filled'
            ? styles.filledPressed
            : styles.pressed
          : null,
        disabled
          ? type === 'outlined'
            ? styles.disabled.borderColor
            : styles.disabled
          : null,
      ]}>
      <IconComponent
        size={size}
        color={disabled ? styles.disabled.color : color}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: COLORS.brandColor500,
  },
  outlined: {
    borderWidth: 1,
    borderColor: COLORS.neutralColors500,
  },
  pressed: {
    backgroundColor: COLORS.neutralColors_ct500_16,
  },
  filledPressed: {
    opacity: 0.6,
  },
  disabled: {
    borderColor: COLORS.neutralColors_ct500_16,
    backgroundColor: COLORS.neutralColors_ct500_16,
    color: COLORS.neutralColors500,
  },
});

export default IconButton;
