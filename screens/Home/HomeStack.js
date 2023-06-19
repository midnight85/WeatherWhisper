import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Forecast from './Forecast';
import AqiDetails from './AqiDetails';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => {},
        }}
      />
      <Stack.Screen name="Forecast" component={Forecast} />
      <Stack.Screen name="AqiDetails" component={AqiDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default HomeStack;
