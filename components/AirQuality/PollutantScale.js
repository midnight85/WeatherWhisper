import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {getComponentMaxValue} from '../../utils/AirQuality/getComponentMaxValue';
import {pollutantScaleStyles} from '../../data/pollutantScaleStyles';
import {getQualitativeIndex} from '../../utils/AirQuality/getQualitativeIndex';

function PollutantScale({component, value}) {
  const componentName = component.toUpperCase().replace('_', '.');
  const [letters, subScript] = componentName.split(
    /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/,
  );
  const maxValue = getComponentMaxValue(component);
  const {
    qualitativeName,
    backgroundColor,
    textColor,
    titleColor,
    indicatorColor,
  } = pollutantScaleStyles[getQualitativeIndex(component, value)];
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={[styles.indicator, {backgroundColor: indicatorColor}]} />
      <View style={styles.innerContainer}>
        <Text style={[styles.title, {color: titleColor}]}>
          {letters}
          {subScript && <Text style={styles.subScript}>{subScript}</Text>}
        </Text>
        <Text style={[styles.index, {color: textColor}]}>
          {qualitativeName}
        </Text>
      </View>
      <Text style={[styles.value, {color: titleColor}]}>
        {value}
        <Text style={[{color: textColor}]}>/{maxValue}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: COLORS.brandColor100,
  },
  innerContainer: {
    flex: 1,
  },
  title: {
    ...FONT_WEIGHT.semiBold,
    ...TEXT.subT1,
  },
  value: {
    ...FONT_WEIGHT.semiBold,
    ...TEXT.subT1,
  },
  index: {
    ...FONT_WEIGHT.semiBold,
    ...TEXT.caption,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  subScript: {
    fontSize: 9,
    verticalAlign: 'bottom',
  },
});

export default PollutantScale;
