import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {COLORS} from '../../constants/GlobalStyles';
import {
  PollutantDetailsGroup,
  PollutantIndex,
  PollutantScaleGroup,
} from '../../components/AirQuality';
import {Title, ProvidedBy, ScrollViewContainer} from '../../components/UI';
import {airPullution} from '../../data/AirPullution';

const components = airPullution.list[0].components;

function AqiDetails() {
  return (
    <ScrollViewContainer>
      <PollutantIndex
        index={1}
        style={{marginBottom: 24}}
      />
      <Title
        text="Air quality"
        style={{marginBottom: 2}}
      />
      <ProvidedBy
        dataText="Air pollutant data"
        source="OpenWeather"
        url="https://openweathermap.org/"
        style={{marginBottom: 16}}
      />
      <PollutantScaleGroup components={components} />
      <Title
        text="Air quality scale"
        style={{marginBottom: 16, marginTop: 24}}
      />
      <PollutantDetailsGroup />
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.baseColors_white,
    padding: 16,
  },
});

export default AqiDetails;
