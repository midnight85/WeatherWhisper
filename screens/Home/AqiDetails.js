import React, {useEffect} from 'react';
import {
  PollutantDetailsGroup,
  PollutantIndex,
  PollutantScaleGroup,
} from '../../components/AirQuality';
import {Title, ScrollViewContainer} from '../../components/UI';
import {
  useGetCurrentQuery,
  useGetForecastQuery,
} from '../../store/weatherApiSlice';
import {weatherApiData} from '../../data/WeatherApiData';
import {useSelector} from 'react-redux';

function AqiDetails() {
  const {trackedCity} = useSelector(store => store.globalState);
  const {currentData} = useGetForecastQuery(trackedCity.url);
  const {air_quality} = currentData.current;
  // const {air_quality} = weatherApiData.current;
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
