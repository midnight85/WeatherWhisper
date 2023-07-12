import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../constants/GlobalStyles';

function InfoBox({title, text, icon: Icon, style}) {
  return (
    <View style={[styles.container, style && style]}>
      {Icon && (
        <Icon
          size={24}
          color={COLORS.neutralColors600}
        />
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 4,
  },
  title: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  text: {
    color: COLORS.neutralColors700,
    ...FONT_WEIGHT.regular,
    ...TEXT.body2,
    textAlign: 'center',
  },
});

export default InfoBox;
