import React from 'react';
import {StyleSheet, View} from 'react-native';
import PollutantDetails from './PollutantDetails';
import {pollutantDetailsData} from '../../data/pollutantDetailsData';

function PollutantDetailsGroup() {
  return (
    <View style={styles.container}>
      {Object.values(pollutantDetailsData).map((data, index) => {
        return (
          <PollutantDetails
            key={index}
            {...data}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
});

export default PollutantDetailsGroup;
