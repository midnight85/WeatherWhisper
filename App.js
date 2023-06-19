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

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function Main() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <BottomTabs.Screen name="SearchScreen" component={SearchScreen} />
      <BottomTabs.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <BottomTabs.Screen
        name="AccountScreen"
        component={AccountStack}
        options={{headerShown: false}}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{}}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
