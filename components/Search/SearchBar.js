import React, {useCallback, useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button} from '../UI';
import {Location} from '../Icons';
import {COLORS, TEXT} from '../../constants/GlobalStyles';
import {SearchInput} from './index';
import {useDispatch, useSelector} from 'react-redux';
import {CurrentLocationItem, Loader} from '../index';
import Geolocation from '@react-native-community/geolocation';
import {useLazyGetSearchQuery} from '../../store/weatherApiSlice';
import {
  setIsNever_ask_againLocationPermission,
  setTrackedCity,
} from '../../store/globalStateSlice';
import {requestLocationPermission} from '../../utils/requestLocationPermission';
import {addItemToRecent} from '../../store/recentSearchSlice';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  FadeOutRight,
  FadeOutUp,
  ZoomInDown,
  ZoomOutUp,
} from 'react-native-reanimated';

function SearchBar({
  searchQuery,
  setSearchQuery,
  textInputInFocus,
  setTextInputInFocus,
}) {
  const dispatch = useDispatch();
  const {trackedCity, isNever_ask_againLocationPermission} = useSelector(
    store => store.globalState,
  );
  const [trigger, {data: searchResult, isLoading, isFetching, isError, error}] =
    useLazyGetSearchQuery();
  const setSelectedFromSearch = useCallback(() => {
    if (searchResult) {
      if (trackedCity?.url !== searchResult[0]?.url) {
        dispatch(setTrackedCity(searchResult[0]));
        // dispatch(addItemToRecent(searchResult[0]));
      }
    }
  }, [dispatch, searchResult, trackedCity]);
  const handleIsNever_ask_againLocationPermission = value => {
    dispatch(setIsNever_ask_againLocationPermission(value));
  };
  const getLocation = async () => {
    const isLocationPermission = await requestLocationPermission(
      isNever_ask_againLocationPermission,
      handleIsNever_ask_againLocationPermission,
    );
    if (isLocationPermission) {
      Geolocation.getCurrentPosition(location => {
        console.log(location.coords);
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;
        if (lat && lon) {
          setSearchQuery('');
          trigger(`${lat},${lon}`);
          setSelectedFromSearch();
        }
      });
    }
  };
  useEffect(() => {
    setSelectedFromSearch();
  }, [searchResult]);
  return (
    <View style={styles.searchBarContainer}>
      <SearchInput
        value={searchQuery}
        setSearchQuery={setSearchQuery}
        textInputInFocus={textInputInFocus}
        setTextInputInFocus={setTextInputInFocus}
      />
      {trackedCity?.url ? (
        textInputInFocus ? (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}>
            <Button
              outlined
              text="Use current location"
              leftIcon={Location}
              style={{columnGap: 16, paddingVertical: 16}}
              iconSize={24}
              textStyle={{...TEXT.subT1, textAlign: 'left', flex: 1}}
              onPress={() => {
                setTextInputInFocus(false);
                getLocation();
              }}
            />
          </Animated.View>
        ) : isLoading || isFetching ? (
          <View style={styles.currentLocationLoaderContainer}>
            <Loader />
          </View>
        ) : (
          <View>
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}>
              <CurrentLocationItem />
            </Animated.View>
          </View>
        )
      ) : (
        <Button
          outlined
          text="Define my location"
          leftIcon={Location}
          style={{columnGap: 16, paddingVertical: 16}}
          textStyle={{...TEXT.subT1, textAlign: 'left', flex: 1}}
          onPress={getLocation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutralColors200,
    rowGap: 16,
  },
  currentLocationLoaderContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.neutralColors500,
    backgroundColor: COLORS.baseColors_white,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 24,
    flexDirection: 'row',
    columnGap: 16,
    alignItems: 'center',
  },
});

export default SearchBar;
