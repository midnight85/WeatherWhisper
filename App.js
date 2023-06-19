import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AccountStack,
  FavoritesScreen,
  HomeStack,
  OnboardingScreen,
  SearchScreen,
} from './screens';
import {
  ACCOUNT_SCREEN,
  FAVORITES_SCREEN,
  HOME_SCREEN,
  MAIN,
  ONBOARDING_SCREEN,
  SEARCH_SCREEN,
} from './constants/ScreenNames';

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function Main() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={HOME_SCREEN}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <BottomTabs.Screen
        name={SEARCH_SCREEN}
        component={SearchScreen}
      />
      <BottomTabs.Screen
        name={FAVORITES_SCREEN}
        component={FavoritesScreen}
      />
      <BottomTabs.Screen
        name={ACCOUNT_SCREEN}
        component={AccountStack}
        options={{headerShown: false}}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{}}>
        <Stack.Screen
          name={ONBOARDING_SCREEN}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name={MAIN}
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
