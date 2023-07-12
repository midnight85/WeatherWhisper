import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {SearchResultItem} from './index';
import {useDispatch} from 'react-redux';
import {setTrackedCity} from '../../store/globalStateSlice';
import {useLazyGetForecastQuery} from '../../store/weatherApiSlice';
import {addItemToRecent} from '../../store/recentSearch';

function SearchResultGroup({reverse, searchResult}) {
  const dispatch = useDispatch();
  const [trigger] = useLazyGetForecastQuery();
  const handleItemPress = item => {
    dispatch(setTrackedCity(item));
    // if item press from recent list, don't add to recent
    !reverse && dispatch(addItemToRecent(item));
    trigger(item.url);
  };
  const items = reverse ? [...searchResult].reverse() : searchResult;
  return (
    <ScrollView>
      {items.map(item => (
        <SearchResultItem
          key={item.id}
          onPress={() => handleItemPress(item)}
          searchResultItem={item}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default SearchResultGroup;
