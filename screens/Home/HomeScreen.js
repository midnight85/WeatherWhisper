import React, {useCallback, useLayoutEffect} from 'react';
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
  FavoritesNoFavorites,
  Location,
  SearchClear,
} from '../../components/Icons';
import {PollutantIndex} from '../../components/AirQuality';
import {
  useGetForecastQuery,
  useGetSearchQuery,
} from '../../store/weatherApiSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getTodayFromForecast} from '../../utils/getTodayFromForecast';
import {getNearestHourData} from '../../utils/getNearestHourData';
import {convert12HourTo24Hour} from '../../utils/convert12HourTo24Hour';
import DayForecastScrollView from '../../components/Forecast/DayForecastScrollView';
import {ModalMenu, MenuItem} from '../../components/Modal';
import {
  setUnitsModalVisible,
  setIsMetricUnits,
  setLocationModalVisible,
  setSelectedCountry,
} from '../../store/globalStateSlice';
import {COLORS} from '../../constants/GlobalStyles';
import HeaderLocation from '../../components/HeaderLocation';
import Loader from '../../components/Loader';
import InfoBox from '../../components/InfoBox';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {
    selectedUnits,
    selectedCountry,
    isMetricUnits,
    unitsModalVisible,
    locationModalVisible,
  } = useSelector(store => store.globalState);
  const favorites = useSelector(store => store.favorites);

  const handleUnitsModalOpen = useCallback(() => {
    dispatch(setUnitsModalVisible(true));
  }, [dispatch]);

  const handleUnitsModalClose = useCallback(() => {
    dispatch(setUnitsModalVisible(false));
  }, [dispatch]);

  const handleLocationModalOpen = useCallback(() => {
    dispatch(setLocationModalVisible(true));
  }, [dispatch]);

  const handleLocationModalClose = useCallback(() => {
    dispatch(setLocationModalVisible(false));
  }, [dispatch]);

  const setMetricUnits = useCallback(() => {
    dispatch(setIsMetricUnits(true));
  }, [dispatch]);

  const setImperialUnits = useCallback(() => {
    dispatch(setIsMetricUnits(false));
  }, [dispatch]);

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerLeft: () => (
          <HeaderLocation
            location={selectedCountry}
            onPress={handleLocationModalOpen}
          />
        ),
        headerLeftContainerStyle: {flex: 4, marginLeft: 4, paddingVertical: 4},
        headerRight: () => (
          <IconButton
            icon={isMetricUnits ? Celsius : Fahrenheit}
            color={COLORS.neutralColors900}
            onPress={handleUnitsModalOpen}
          />
        ),
        headerRightContainerStyle: {marginRight: 4},
      }),
    [
      navigation,
      isMetricUnits,
      selectedCountry,
      handleUnitsModalOpen,
      handleLocationModalOpen,
    ],
  );
  const {
    data: weatherApiData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetForecastQuery(selectedCountry.url, {skip: !selectedCountry.url});
  const Modals = () => (
    <>
      <ModalMenu
        modalVisible={unitsModalVisible}
        handleModalClose={handleUnitsModalClose}
        right>
        <MenuItem
          checked={isMetricUnits}
          text={'Celsius'}
          leftIcon={Celsius}
          onPress={() => {
            setMetricUnits();
            handleUnitsModalClose();
          }}
        />
        <MenuItem
          checked={!isMetricUnits}
          text={'Fahrenheit'}
          leftIcon={Celsius}
          onPress={() => {
            setImperialUnits();
            handleUnitsModalClose();
          }}
        />
      </ModalMenu>
      <ModalMenu
        modalVisible={locationModalVisible}
        handleModalClose={handleLocationModalClose}
        left>
        <MenuItem
          text={'No selected country'}
          onPress={() => {
            handleLocationModalClose();
          }}
        />
        {/*{favorites?.map(item => {*/}
        {/*  const selected = selectedCountry.url === item.url;*/}
        {/*  return (*/}
        {/*    <MenuItem*/}
        {/*      key={item.url}*/}
        {/*      checked={selected}*/}
        {/*      text={item.name}*/}
        {/*      leftIcon={Location}*/}
        {/*      onPress={() => {*/}
        {/*        dispatch(setSelectedCountry(item));*/}
        {/*        handleLocationModalClose();*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </ModalMenu>
    </>
  );
  if (!selectedCountry.url) {
    return (
      <>
        <Modals />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 48,
          }}>
          <InfoBox
            icon={FavoritesNoFavorites}
            title={'No selected country!'}
            text={
              'Please select a city to display the weather forecast by using the search or your current location.'
            }
          />
        </View>
      </>
    );
  }
  if (isLoading) {
    return <Loader style={{backgroundColor: 'white'}} />;
  }
  if (isError) {
    return (
      <>
        <Modals />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 48,
          }}>
          <InfoBox
            icon={SearchClear}
            title={'Error'}
            text={error}
          />
        </View>
      </>
    );
  }
  const localtime = weatherApiData?.location.localtime;
  const forecastday = weatherApiData?.forecast.forecastday;
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
  } = weatherApiData?.current;
  const {maxtemp_c, maxtemp_f, mintemp_c, mintemp_f} = todayForecastData.day;
  const {daily_will_it_rain} = getNearestHourData(
    localtime,
    todayForecastData.hour,
  );
  const {sunrise, sunset} = todayForecastData.astro;

  return (
    <>
      <Modals />
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
          {forecastday.map((item, index) => (
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
