import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {pollutantDetailsData} from '../../../data/pollutantDetailsData';
import {FONT_WEIGHT, TEXT} from '../../../constants/GlobalStyles';

function PollutantIndex({index}) {
  const {
    icon: Icon,
    title,
    textColor,
    titleColor,
    indexColor,
    backgroundColor,
    description,
  } = pollutantDetailsData[index];
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={[styles.indexContainer, {backgroundColor: indexColor}]}>
        <Icon
          size={24}
          color={textColor}
        />
        <Text style={[styles.index, {color: titleColor}]}>{index}</Text>
        <Text style={[styles.aqi, {color: textColor}]}>AQI</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
        <Text style={[styles.description, {color: textColor}]}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderRadius: 16,
    flexDirection: 'row',
    columnGap: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  description: {
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
  indexContainer: {
    width: '40%',
    rowGap: 4,
    aspectRatio: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  index: {
    ...FONT_WEIGHT.semiBold,
    ...TEXT.h4,
  },
  aqi: {
    ...FONT_WEIGHT.medium,
    ...TEXT.caption,
  },
});

export default PollutantIndex;
