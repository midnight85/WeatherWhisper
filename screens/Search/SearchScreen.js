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
import {Button, Title} from '../../components/UI';
import {InfoBox} from '../../components';
import {SearchNoRecents, SearchNoResults} from '../../components/Icons';
import {
  useGetSearchQuery,
  useLazyGetSearchQuery,
} from '../../store/weatherApiSlice';
import {Loader} from '../../components';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {cleanAllRecent} from '../../store/recentSearch';

function SearchScreen() {
  const dispatch = useDispatch();
  const resentSearchItems = useSelector(store => store.recentSearch);
  const isFocused = useIsFocused();
  const [searchQuery, setSearchQuery] = useState('');
  const [textInputInFocus, setTextInputInFocus] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery);

  const {
    data: weatherApiSearchData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSearchQuery(debouncedSearchQuery, {
    skip: debouncedSearchQuery.length < 3,
  });
  const isShowSearchResult = textInputInFocus || searchQuery;
  const handleClearRecent = () => {
    dispatch(cleanAllRecent());
  };

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
      <View style={styles.titleContainer}>
        <Title text={isShowSearchResult ? 'Search results' : 'Recent'} />
        {!isShowSearchResult && resentSearchItems.length > 0 && (
          <Button
            text="Clear recent"
            onPress={handleClearRecent}
          />
        )}
      </View>
      <ScrollView style={styles.bottomContainer}>
        {isLoading ? (
          <Loader />
        ) : !searchQuery || !weatherApiSearchData?.length ? (
          resentSearchItems.length && !textInputInFocus ? (
            <SearchResultGroup
              reverse
              searchResult={resentSearchItems}
            />
          ) : (
            <InfoBox
              style={{marginTop: 48, marginHorizontal: 48}}
              icon={isShowSearchResult ? SearchNoResults : SearchNoRecents}
              title={isShowSearchResult ? 'No results' : 'No recent'}
              text={
                !weatherApiSearchData?.length && searchQuery && isSuccess
                  ? "Oops! We couldn't find the city you're searching for. Please double-check the spelling and try again."
                  : 'Stay informed about the weather! Enter a city name to track the current weather conditions and forecast'
              }
            />
          )
        ) : (
          <SearchResultGroup searchResult={weatherApiSearchData} />
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 24,
    paddingHorizontal: 16,
  },
});

export default SearchScreen;
