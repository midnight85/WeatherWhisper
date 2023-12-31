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
import {
  SearchClear,
  SearchNoRecents,
  SearchNoResults,
} from '../../components/Icons';
import {
  useGetSearchQuery,
  useLazyGetSearchQuery,
} from '../../store/weatherApiSlice';
import {Loader} from '../../components';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {cleanAllRecent} from '../../store/recentSearchSlice';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  Layout,
} from 'react-native-reanimated';
import {HomeScreenModals} from '../../components/Modal';

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
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetSearchQuery(debouncedSearchQuery, {
    skip: !debouncedSearchQuery,
    // queryKey: ['getSearch', debouncedSearchQuery],
  });
  const isShowSearchResult =
    (searchQuery.length && weatherApiSearchData?.length) ||
    (searchQuery.length && textInputInFocus);
  const handleClearRecent = () => {
    dispatch(cleanAllRecent());
  };
  useEffect(() => {
    if (!isFocused) {
      setSearchQuery('');
    }
  }, [isFocused]);
  if (isError) {
    if (error.status === 403) {
      return (
        <>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 48,
            }}>
            <InfoBox
              icon={SearchClear}
              title={error.data.error.message}
            />
          </View>
        </>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          textInputInFocus={textInputInFocus}
          setTextInputInFocus={setTextInputInFocus}
        />
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 48,
          }}>
          <InfoBox
            icon={SearchClear}
            text={error.error.split('TypeError:')[1]}
          />
        </View>
      </SafeAreaView>
    );
  }
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
      <View style={{flex: 1}}>
        {isFetching || isLoading ? (
          <Loader />
        ) : !searchQuery || !weatherApiSearchData?.length ? (
          !searchQuery.length &&
          resentSearchItems.length &&
          (!textInputInFocus || (textInputInFocus && !searchQuery.length)) ? (
            <SearchResultGroup
              reverse
              searchResult={resentSearchItems}
            />
          ) : (
            <Animated.View
              style={{flex: 1}}
              entering={FadeIn}
              exiting={FadeOut}>
              <InfoBox
                style={{marginTop: '35%', marginHorizontal: 48}}
                icon={isShowSearchResult ? SearchNoResults : SearchNoRecents}
                title={isShowSearchResult ? 'No results' : 'No recent'}
                text={
                  !weatherApiSearchData?.length && searchQuery
                    ? "Oops! We couldn't find the city you're searching for. Please double-check the spelling and try again."
                    : 'Stay informed about the weather! Enter a city name to track the current weather conditions and forecast'
                }
              />
            </Animated.View>
          )
        ) : (
          debouncedSearchQuery === searchQuery && (
            <SearchResultGroup searchResult={weatherApiSearchData} />
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.baseColors_white,
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
