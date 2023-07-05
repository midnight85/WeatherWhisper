import React from 'react';
import {StyleSheet, View} from 'react-native';
import PollutantScale from './PollutantScale';

function PollutantScaleGroup({components}) {
  const filteredObject = {};
  for (const key in components) {
    if (
      components.hasOwnProperty(key) &&
      key !== 'us-epa-index' &&
      key !== 'gb-defra-index'
    ) {
      filteredObject[key] = components[key];
    }
  }
  return (
    <View style={styles.container}>
      {Object.keys(filteredObject).map((item, index) => (
        <PollutantScale
          key={index}
          component={item}
          value={components[item].toFixed(1)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});

export default PollutantScaleGroup;
