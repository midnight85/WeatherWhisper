import React from 'react';
import {StyleSheet, View} from 'react-native';

function DayForecastGroup({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 8,
  },
});

export default DayForecastGroup;
