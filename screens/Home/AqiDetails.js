import React from 'react';
import {
  PollutantDetailsGroup,
  PollutantIndex,
  PollutantScaleGroup,
} from '../../components/AirQuality';
import {Title, ScrollViewContainer} from '../../components/UI';
import {useGetForecastQuery} from '../../store/weatherApiSlice';
import {weatherApiData} from '../../data/WeatherApiData';

function AqiDetails() {
  // const {data: data1} = useGetForecastQuery();
  // console.log(data1);
  const {air_quality} = weatherApiData.current;
  return (
    <ScrollViewContainer>
      <PollutantIndex
        index={air_quality['us-epa-index']}
        style={{marginBottom: 24}}
      />
      <Title
        text="Air quality"
        style={{marginBottom: 16}}
      />
      <PollutantScaleGroup components={air_quality} />
      <Title
        text="Air quality scale"
        style={{marginBottom: 16, marginTop: 24}}
      />
      <PollutantDetailsGroup />
    </ScrollViewContainer>
  );
}

export default AqiDetails;
