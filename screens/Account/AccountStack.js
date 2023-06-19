import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AccountScreen from './AccountScreen';
import AccountAbout from './AccountAbout';
import AccountUnits from './AccountUnits';
import AccountLocationSetting from './AccountLocationSetting';
import AccountEditProfile from './AccountEditProfile';

const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerLeft: () => {},
        }}
      />
      <Stack.Screen name="AccountEditProfile" component={AccountEditProfile} />
      <Stack.Screen name="AccountUnits" component={AccountUnits} />
      <Stack.Screen
        name="AccountLocationSetting"
        component={AccountLocationSetting}
      />
      <Stack.Screen name="AccountAbout" component={AccountAbout} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AccountStack;
