import React from 'react';
import {Text, View} from 'react-native';
import {AQI_DETAILS, FIVE_DAY_FORECAST} from '../../constants/ScreenNames';
import {
  ScrollViewContainer,
  Title,
  Button,
  ProvidedBy,
  IconButton,
} from '../../components/UI';
import {
  DayForecast,
  DayForecastGroup,
  MainForecast,
  SunDetails,
  WeatherDetailsGroup,
} from '../../components/Forecast';
import {
  Celsius,
  ChevronRight,
  Fahrenheit,
  Location,
} from '../../components/Icons';
import {PollutantIndex} from '../../components/AirQuality';
import {useGetForecastQuery} from '../../store/weatherApiSlice';
import {weatherApiData} from '../../data/WeatherApiData';
import {useDispatch, useSelector} from 'react-redux';
import {getTodayFromForecast} from '../../utils/getTodayFromForecast';
import {getNearestHourData} from '../../utils/getNearestHourData';
import {convert12HourTo24Hour} from '../../utils/convert12HourTo24Hour';
import DayForecastScrollView from '../../components/Forecast/DayForecastScrollView';
import ModalMenu from '../../components/Modal/ModalMenu';
import MenuItem from '../../components/Modal/MenuItem';
import {
  setUnitsModalVisible,
  setIsMetricUnits,
  setLocationModalVisible,
  setSelectedCountry,
} from '../../store/globalStateSlice';
import {COLORS} from '../../constants/GlobalStyles';
import HeaderLocation from '../../components/HeaderLocation';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {
    selectedUnits,
    isMetricUnits,
    unitsModalVisible,
    locationModalVisible,
  } = useSelector(store => store.globalState);
  const {localtime} = weatherApiData.location;
  const {forecastday} = weatherApiData.forecast;
  const todayForecastData = getTodayFromForecast(localtime, forecastday);
  const {
    temp_c,
    temp_f,
    feelslike_c,
    feelslike_f,
    condition,
    humidity,
    wind_mph,
    wind_kph,
    cloud,
    vis_km,
    vis_miles,
    pressure_mb,
    pressure_in,
    air_quality,
  } = weatherApiData.current;
  const {maxtemp_c, maxtemp_f, mintemp_c, mintemp_f} = todayForecastData.day;
  const {daily_will_it_rain} = getNearestHourData(
    localtime,
    todayForecastData.hour,
  );
  const {sunrise, sunset} = todayForecastData.astro;
  // const {data: data1} = useGetForecastQuery();
  // weatherApiData

  const handleUnitsModalOpen = () => {
    dispatch(setUnitsModalVisible(true));
  };
  const handleUnitsModalClose = () => {
    dispatch(setUnitsModalVisible(false));
  };
  const handleLocationModalOpen = () => {
    dispatch(setLocationModalVisible(true));
  };
  const handleLocationModalClose = () => {
    dispatch(setLocationModalVisible(false));
  };
  const setMetricUnits = () => {
    dispatch(setIsMetricUnits(true));
  };
  const setImperialUnits = () => {
    dispatch(setIsMetricUnits(false));
  };

  React.useLayoutEffect(
    () =>
      navigation.setOptions({
        headerLeft: () => (
          <HeaderLocation
            location={'USA, New York'}
            onPress={handleLocationModalOpen}
          />
        ),
        headerLeftContainerStyle: {flex: 4, marginLeft: 4, paddingVertical: 4},
        headerRight: () => (
          <IconButton
            icon={Celsius}
            color={COLORS.neutralColors900}
            onPress={handleUnitsModalOpen}
          />
        ),
        headerRightContainerStyle: {marginRight: 4},
      }),
    [navigation],
  );
  return (
    <>
      <ModalMenu
        modalVisible={unitsModalVisible}
        handleModalClose={handleUnitsModalClose}
        right>
        <MenuItem
          checked={isMetricUnits}
          text={'Celsius'}
          leftIcon={Celsius}
          onPress={setMetricUnits}
        />
        <MenuItem
          checked={!isMetricUnits}
          text={'Fahrenheit'}
          leftIcon={Celsius}
          onPress={setImperialUnits}
        />
      </ModalMenu>
      <ModalMenu
        modalVisible={locationModalVisible}
        handleModalClose={handleLocationModalClose}
        left>
        <MenuItem
          // checked={isMetricUnits}
          text={'GB, London'}
          leftIcon={Location}
          onPress={() => {}}
        />
        <MenuItem
          // checked={!isMetricUnits}
          text={'UA, Kyiv'}
          leftIcon={Location}
          onPress={() => {}}
        />
      </ModalMenu>
      <ScrollViewContainer>
        <MainForecast
          localtime={localtime}
          isMetricUnits={isMetricUnits}
          temp={isMetricUnits ? temp_c : temp_f}
          maxtemp={isMetricUnits ? maxtemp_c : maxtemp_f}
          mintemp={isMetricUnits ? mintemp_c : mintemp_f}
          feelslike={isMetricUnits ? feelslike_c : feelslike_f}
          condition_text={condition.text}
          icon={condition.icon.split('64x64')[1]}
          style={{marginBottom: 8}}
        />
        <WeatherDetailsGroup
          isMetricUnits={isMetricUnits}
          data={{
            humidity: humidity,
            wind: isMetricUnits ? wind_kph : wind_mph,
            precipitation: daily_will_it_rain ? 'Yes' : 'No',
          }}
          style={{marginBottom: 24}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Title text="Other days" />
          <Button
            text="5 days forecast"
            rightIcon={ChevronRight}
            onPress={() => navigation.navigate(FIVE_DAY_FORECAST)}
          />
        </View>
        {/* apply DayForecastScrollView if > 5 days forecast */}
        {/*<DayForecastScrollView>*/}
        <DayForecastGroup>
          {forecastday.slice(0, 5).map((item, index) => (
            <DayForecast
              key={index}
              day
              temp={isMetricUnits ? item.day.avgtemp_c : item.day.avgtemp_f}
              date={item.date}
              icon={item.day.condition.icon.split('64x64')[1]}
              pop={item.day.daily_chance_of_rain}
            />
          ))}
        </DayForecastGroup>
        {/*</DayForecastScrollView>*/}
        <Title
          text="More details"
          style={{marginBottom: 16, marginTop: 24}}
        />
        <WeatherDetailsGroup
          style={{marginBottom: 8}}
          data={{
            cloud: cloud,
            visibility: isMetricUnits ? vis_km : vis_miles,
            pressure: isMetricUnits ? pressure_mb : pressure_in,
          }}
        />
        <View style={{flexDirection: 'row', gap: 8}}>
          <SunDetails
            value={convert12HourTo24Hour(sunrise)}
            status="Sunrise"
          />
          <SunDetails
            value={convert12HourTo24Hour(sunset)}
            status="Sunset"
          />
        </View>
        <Title
          text="Air quality"
          style={{marginBottom: 16, marginTop: 24}}
        />
        <PollutantIndex
          index={air_quality['us-epa-index']}
          style={{marginBottom: 24}}
        />
        <Button
          text={'Show details'}
          outlined
          onPress={() => navigation.navigate(AQI_DETAILS)}
        />
        <ProvidedBy
          dataText="Weather data"
          source="WeatherAPI.com"
          url="https://www.weatherapi.com/"
          style={{marginBottom: 24, marginTop: 56, textAlign: 'center'}}
        />
      </ScrollViewContainer>
    </>
  );
}

export default HomeScreen;
