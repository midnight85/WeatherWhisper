import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FONT_WEIGHT, TEXT} from '../../../constants/GlobalStyles';

function PollutantDetails({
  icon: Icon,
  title,
  textColor,
  titleColor,
  backgroundColor,
  description,
}) {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Icon
        size={24}
        color={textColor}
      />
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
      <Text style={[styles.description, {color: textColor}]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    rowGap: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    ...FONT_WEIGHT.semiBold,
    ...TEXT.subT1,
  },
  description: {
    ...FONT_WEIGHT.regular,
    ...TEXT.body1,
  },
});

export default PollutantDetails;
