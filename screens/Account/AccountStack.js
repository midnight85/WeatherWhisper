import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AccountScreen from './AccountScreen';
import AccountAbout from './AccountAbout';
import AccountUnits from './AccountUnits';
import AccountLocationSetting from './AccountLocationSetting';
import AccountEditProfile from './AccountEditProfile';
import {
  A,
  ACCOUNT,
  ACCOUNT_ABOUT,
  ACCOUNT_EDIT_PROFILE,
  ACCOUNT_LOCATION_SETTING,
  ACCOUNT_UNITS,
} from '../../constants/ScreenNames';

const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name={ACCOUNT}
        component={AccountScreen}
        options={{
          headerLeft: () => {},
        }}
      />
      <Stack.Screen
        name={ACCOUNT_EDIT_PROFILE}
        component={AccountEditProfile}
      />
      <Stack.Screen
        name={ACCOUNT_UNITS}
        component={AccountUnits}
      />
      <Stack.Screen
        name={ACCOUNT_LOCATION_SETTING}
        component={AccountLocationSetting}
      />
      <Stack.Screen
        name={ACCOUNT_ABOUT}
        component={AccountAbout}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AccountStack;
