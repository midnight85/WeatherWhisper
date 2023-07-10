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
import {setSelectedCountry} from '../../store/globalStateSlice';

function SearchBar({
  searchQuery,
  setSearchQuery,
  textInputInFocus,
  setTextInputInFocus,
}) {
  const dispatch = useDispatch();
  const {selectedCountry} = useSelector(store => store.globalState);
  const [trigger, {data: searchResult, isLoading, isError, error}] =
    useLazyGetSearchQuery();
  const setSelectedFromSearch = useCallback(() => {
    if (searchResult) {
      console.log('searchResult', searchResult);
      if (selectedCountry?.url !== searchResult[0]?.url) {
        dispatch(setSelectedCountry(searchResult[0]));
      }
    }
  }, [dispatch, searchResult, selectedCountry]);
  const getLocation = () => {
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
      {selectedCountry.url ? (
        textInputInFocus ? (
          <Button
            outlined
            text="Use current location"
            leftIcon={Location}
            style={{columnGap: 16, paddingVertical: 16}}
            textStyle={{...TEXT.subT1, textAlign: 'left', flex: 1}}
            onPress={() => {
              setTextInputInFocus(false);
              getLocation();
            }}
          />
        ) : isLoading ? (
          <Loader />
        ) : (
          <CurrentLocationItem />
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
});

export default SearchBar;
