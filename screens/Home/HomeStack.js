import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FiveDayForecast from './FiveDayForecast';
import AqiDetails from './AqiDetails';
import {
  AQI_DETAILS,
  FIVE_DAY_FORECAST,
  HOME,
} from '../../constants/ScreenNames';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {ArrowBack, Celsius} from '../../components/Icons';
import {IconButton} from '../../components/UI';
import {adaptiveValue} from '../../utils/adaptiveValue';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      // initialRouteName={FIVE_DAY_FORECAST}
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: COLORS.neutralColors200,
          height: adaptiveValue({value: 64}),
        },
        headerTitleStyle: {
          ...FONT_WEIGHT.medium,
          ...TEXT.subT1,
        },
        headerTitleContainerStyle: {
          marginLeft: 0,
          justifyContent: 'center',
        },
        headerTitleAlign: 'left',
        headerLeftContainerStyle: {},
        headerBackImage: ({tintColor}) => (
          <View style={{marginHorizontal: 5, marginVertical: 9}}>
            <ArrowBack
              size={24}
              color={tintColor}
            />
          </View>
        ),
      }}>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name={FIVE_DAY_FORECAST}
        component={FiveDayForecast}
        options={{
          title: '5 days forecast',
        }}
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

export default HomeStack;
