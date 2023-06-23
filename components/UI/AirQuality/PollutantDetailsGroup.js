import React from 'react';
import {StyleSheet, View} from 'react-native';
import {pollutantDetailsData} from './PollutantDetailsData';
import PollutantDetails from './PollutantDetails';

function PollutantDetailsGroup() {
  return (
    <View style={styles.container}>
      {pollutantDetailsData.map((data, index) => {
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
