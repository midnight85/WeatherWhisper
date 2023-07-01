import React from 'react';
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

export default AqiDetails;
