import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Forecast from './Forecast';
import AqiDetails from './AqiDetails';
import {AQI_DETAILS, FORECAST, HOME} from '../../constants/ScreenNames';
import {FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      // initialRouteName={AQI_DETAILS}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerTitleStyle: {
          ...FONT_WEIGHT.medium,
          ...TEXT.subT1,
        },
      }}>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          headerLeft: () => {},
        }}
      />
      <Stack.Screen
        name={FORECAST}
        component={Forecast}
      />
      <Stack.Screen
        name={AQI_DETAILS}
        component={AqiDetails}
        options={{
          title: 'Air quality details',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default HomeStack;
