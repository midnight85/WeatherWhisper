import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, TEXT} from '../../constants/GlobalStyles';
import {SearchBar, SearchResultGroup} from '../../components/Search';
import {useDebounce} from '../../hooks/useDebounce';
import {Title} from '../../components/UI';
import {InfoBox} from '../../components';
import {SearchNoRecents, SearchNoResults} from '../../components/Icons';
import {
  useGetSearchQuery,
  useLazyGetSearchQuery,
} from '../../store/weatherApiSlice';
import {Loader} from '../../components';
import {useIsFocused} from '@react-navigation/native';

function SearchScreen() {
  const isFocused = useIsFocused();
  const [searchQuery, setSearchQuery] = useState('');
  const [textInputInFocus, setTextInputInFocus] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery);
  const {
    data: weatherApiSearchData,
    isLoading,
    isError,
    error,
  } = useGetSearchQuery(debouncedSearchQuery, {
    skip: !debouncedSearchQuery,
  });
  // const [trigger, result] = useLazyGetSearchQuery();
  // const {data: weatherApiSearchData, isLoading, isError, error} = result;
  // useEffect(() => {
  //   if (!debouncedSearchQuery) {
  //     result.unsubscribe();
  //   }
  //   if (debouncedSearchQuery) {
  //     trigger(debouncedSearchQuery);
  //   }
  // }, [debouncedSearchQuery]);
  useEffect(() => {
    if (!isFocused) {
      setSearchQuery('');
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        textInputInFocus={textInputInFocus}
        setTextInputInFocus={setTextInputInFocus}
      />
      <Title
        text={textInputInFocus || searchQuery ? 'Search results' : 'Recent'}
        style={{marginBottom: 8, marginTop: 24, paddingHorizontal: 16}}
      />
      <ScrollView style={styles.bottomContainer}>
        {/*<Loader style={{marginTop: 48}} />*/}
        {isLoading ? (
          <Loader />
        ) : !searchQuery || !weatherApiSearchData?.length ? (
          <InfoBox
            style={{marginTop: 48, marginHorizontal: 48}}
            icon={
              textInputInFocus || searchQuery
                ? SearchNoResults
                : SearchNoRecents
            }
            title={textInputInFocus || searchQuery ? 'No results' : 'No recent'}
            text={
              !weatherApiSearchData?.length
                ? "Oops! We couldn't find the city you're searching for. Please double-check the spelling and try again."
                : 'Stay informed about the weather! Enter a city name to track the current weather conditions and forecast'
            }
          />
        ) : (
          <SearchResultGroup
            searchQuery={searchQuery}
            searchResult={weatherApiSearchData}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.baseColors_white,
  },
  bottomContainer: {
    // paddingTop: 24,
    // paddingHorizontal: 16,
  },
});

export default SearchScreen;
