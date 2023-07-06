import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {adaptiveValue} from '../../utils/adaptiveValue';

function DayForecastScrollView({children, style}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.container, style && style]}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginHorizontal: -16,
    marginBottom: 8,
    height: adaptiveValue({initialScreenWidth: 360, value: 140}),
  },
});

export default DayForecastScrollView;
