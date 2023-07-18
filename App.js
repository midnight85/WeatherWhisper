import React from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
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
import {
  FavoriteFilled,
  FavoriteOutlined,
  HomeFilled,
  HomeOutlined,
  Search,
  User,
  UserFilled,
} from './components/Icons';
import {COLORS, FONT_WEIGHT, TEXT} from './constants/GlobalStyles';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {enableFreeze} from 'react-native-screens';
import NetInfo from '@react-native-community/netinfo';
import {weatherApi} from './store/weatherApiSlice';

enableFreeze(true);

NetInfo.fetch().then(state => {
  // Dispatch the initial network connectivity state
  store.dispatch(
    weatherApi.util.updateQueryData('getForecast', undefined, {
      isConnected: state.isConnected,
    }),
  );
});

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function Main() {
  return (
    <BottomTabs.Navigator
      // initialRouteName={FAVORITES_SCREEN}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          ...FONT_WEIGHT.semiBold,
          ...TEXT.caption,
        },
        tabBarActiveTintColor: COLORS.brandColor500,
        tabBarInactiveTintColor: COLORS.neutralColors900,
        tabBarStyle: {
          backgroundColor: COLORS.baseColors_white,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 16,
        },
      }}>
      <BottomTabs.Screen
        name={HOME_SCREEN}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <HomeFilled
                color={color}
                size={size}
              />
            ) : (
              <HomeOutlined
                color={color}
                size={size}
              />
            );
          },
          tabBarLabel: 'Home',
        }}
      />
      <BottomTabs.Screen
        name={SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Search
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name={FAVORITES_SCREEN}
        component={FavoritesScreen}
        options={{
          headerTitleStyle: {
            color: COLORS.neutralColors900,
            ...FONT_WEIGHT.semiBold,
            ...TEXT.h6,
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: COLORS.neutralColors200,
          },
          tabBarLabel: 'Favorites',
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <FavoriteFilled
                color={color}
                size={size}
              />
            ) : (
              <FavoriteOutlined
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      {/*<BottomTabs.Screen*/}
      {/*  name={ACCOUNT_SCREEN}*/}
      {/*  component={AccountStack}*/}
      {/*  options={{*/}
      {/*    headerShown: false,*/}
      {/*    tabBarLabel: 'Account',*/}
      {/*    tabBarIcon: ({focused, color, size}) => {*/}
      {/*      return focused ? (*/}
      {/*        <UserFilled*/}
      {/*          color={color}*/}
      {/*          size={size}*/}
      {/*        />*/}
      {/*      ) : (*/}
      {/*        <User*/}
      {/*          color={color}*/}
      {/*          size={size}*/}
      {/*        />*/}
      {/*      );*/}
      {/*    },*/}
      {/*  }}*/}
      {/*/>*/}
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="white"
        barStyle={'dark-content'}
      />
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Main"
              screenOptions={{}}>
              <Stack.Screen
                name={ONBOARDING_SCREEN}
                component={OnboardingScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={MAIN}
                component={Main}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
