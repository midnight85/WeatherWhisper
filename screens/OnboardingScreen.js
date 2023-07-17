import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/UI/Button';
import {COLORS, ELEVATION} from '../constants/GlobalStyles';
import {
  SettingsOutlined,
  ChevronRight,
  User,
  HumidityPercentage,
  Wind,
  Precipitation,
  Cloud,
  Visibility,
  Pressure,
  Fahrenheit,
  Check,
} from '../components/Icons';
import MainForecast from '../components/Forecast/MainForecast';
import WeatherDetails from '../components/Forecast/WeatherDetails';
import WeatherDetailsGroup from '../components/Forecast/WeatherDetailsGroup';
import Title from '../components/UI/Title';
import SunDetails from '../components/Forecast/SunDetails';
import PollutantDetails from '../components/AirQuality/PollutantDetails';
import {pollutantDetailsData} from '../data/pollutantDetailsData';
import PollutantDetailsGroup from '../components/AirQuality/PollutantDetailsGroup';
import IconButton from '../components/UI/IconButton';
import PollutantIndex from '../components/AirQuality/PollutantIndex';
import {airPullution} from '../data/AirPullution';
import PollutantScale from '../components/AirQuality/PollutantScale';
import PollutantScaleGroup from '../components/AirQuality/PollutantScaleGroup';
import DayForecastGroup from '../components/Forecast/DayForecastGroup';
import DayForecastDropdown from '../components/Forecast/DayForecastDropdown';
import DayForecast from '../components/Forecast/DayForecast';
import {adaptiveValue} from '../utils/adaptiveValue';
import ModalMenu from '../components/Modal/ModalMenu';
import {useGetForecastQuery} from '../store/weatherApiSlice';

function OnboardingScreen() {
  const navigation = useNavigation();
  // const {data} = useGetForecastQuery();
  // console.log(data?.current);
  const components = airPullution.list[0].components;
  const [modalVisible, setModalVisible] = useState(true);
  return (
    // <ScrollView style={{backgroundColor: 'white'}}>
    <View style={styles.container}>
      <Text onPress={() => setModalVisible(true)}>Show</Text>
      <ModalMenu
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 300,
    paddingHorizontal: 16,
    paddingTop: 54,
    paddingBottom: 54,
    rowGap: 20,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    // flexDirection: 'row',
    gap: 20,
  },
  wd: {
    flexDirection: 'row',
    columnGap: 8,
    marginTop: 8,
  },
});

export default OnboardingScreen;
// <View>
//   <Text>OnboardingScreen</Text>
//   <Button
//     title={'Go  to  tabs'}
//     onPress={() => navigation.navigate('Main')}
//   />
// </View>
