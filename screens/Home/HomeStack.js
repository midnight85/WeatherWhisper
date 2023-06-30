import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Forecast from './Forecast';
import AqiDetails from './AqiDetails';
import {AQI_DETAILS, FORECAST, HOME} from '../../constants/ScreenNames';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {ArrowBack} from '../../components/Icons';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      // initialRouteName={AQI_DETAILS}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: COLORS.neutralColors200,
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
