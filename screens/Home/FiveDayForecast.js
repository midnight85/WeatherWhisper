import React from 'react';
import {View} from 'react-native';
import {ScrollViewContainer} from '../../components/UI';
import DayForecast from '../../components/Forecast/DayForecast';
import DayForecastDropdown from '../../components/Forecast/DayForecastDropdown';
//to do: avarage temp and status func
const data = [
  {
    dt_txt: '2023-07-01 21:00:00',
    main: 'Rain',
    icon: '04n',
    temp: '23',
  },
  {
    dt_txt: '2023-06-22 21:00:00',
    main: 'Clear',
    icon: '04d',
    temp: '19',
  },
  {
    dt_txt: '2023-06-23 21:00:00',
    main: 'Rain',
    icon: '10n',
    temp: '28',
  },
  {
    dt_txt: '2023-06-24 21:00:00',
    main: 'Clouds',
    icon: '03n',
    temp: '11',
  },
  {
    dt_txt: '2023-06-25 21:00:00',
    main: 'Rain',
    icon: '01d',
    temp: '24',
  },
];

function FiveDayForecast() {
  return (
    <ScrollViewContainer
      contentContainerStyle={{paddingHorizontal: 0, paddingTop: 8}}>
      {data.map((item, index) => (
        <DayForecastDropdown
          key={index}
          {...item}>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 8,
            }}>
            {/*day 3 hour forecast*/}
            {[
              {dt_txt: '2023-06-22 00:00:00', icon: '04n', temp: '23'},
              {dt_txt: '2023-06-22 03:00:00', icon: '04d', temp: '19'},
              {dt_txt: '2023-06-22 06:00:00', icon: '10n', temp: '28'},
              {dt_txt: '2023-06-22 09:00:00', icon: '03n', temp: '11'},
              {dt_txt: '2023-06-22 12:00:00', icon: '01d', temp: '24'},
              {dt_txt: '2023-06-22 15:00:00', icon: '10n', temp: '14'},
              {dt_txt: '2023-06-22 18:00:00', icon: '01d', temp: '24'},
              {dt_txt: '2023-06-22 21:00:00', icon: '01d', temp: '32'},
            ].map((item, index) => (
              <DayForecast
                key={index}
                time
                {...item}
              />
            ))}
          </View>
        </DayForecastDropdown>
      ))}
    </ScrollViewContainer>
  );
}

export default FiveDayForecast;
