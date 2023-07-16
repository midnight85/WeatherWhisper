import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {COLORS, TEXT, FONT_WEIGHT} from '../../constants/GlobalStyles';

function Button({
  text,
  onPress,
  disabled,
  filled,
  outlined,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  style,
  iconSize,
  textStyle,
}) {
  const textColor = disabled
    ? styles.disabled.color
    : filled
    ? COLORS.baseColors_white
    : COLORS.brandColor500;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styles.container,
        filled && styles.filled,
        outlined && styles.outlined,
        RightIcon && (filled || outlined) && {paddingRight: 16},
        LeftIcon && (filled || outlined) && {paddingLeft: 16},
        pressed ? (outlined ? styles.pressed : styles.filledPressed) : null,
        disabled
          ? filled
            ? styles.disabled
            : outlined
            ? styles.disabled.borderColor
            : styles.disabled.color
          : null,
        style && {...style},
      ]}>
      {LeftIcon && (
        <LeftIcon
          size={iconSize ? iconSize : 18}
          color={textColor}
        />
      )}
      <Text
        style={[styles.text, {color: textColor}, textStyle && {...textStyle}]}>
        {text}
      </Text>
      {RightIcon && (
        <RightIcon
          size={iconSize ? iconSize : 18}
          color={textColor}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
  },
  text: {
    ...TEXT.btn,
    ...FONT_WEIGHT.semiBold,
    textAlign: 'center',
  },
  filled: {
    backgroundColor: COLORS.brandColor500,
    paddingVertical: 10,
    paddingRight: 24,
    paddingLeft: 24,
  },
  outlined: {
    borderWidth: 1,
    borderColor: COLORS.neutralColors500,
    paddingVertical: 10,
    paddingRight: 24,
    paddingLeft: 24,
  },
  pressed: {
    backgroundColor: COLORS.brandColor_ct400_16,
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

export default Button;
