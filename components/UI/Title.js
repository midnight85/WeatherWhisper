import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';

function Title({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
});

export default Title;
