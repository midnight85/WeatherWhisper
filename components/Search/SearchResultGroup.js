import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SearchResultItem} from './index';
import {useDispatch} from 'react-redux';
import {setSelectedCountry} from '../../store/globalStateSlice';
import {useLazyGetForecastQuery} from '../../store/weatherApiSlice';
import {addItemToRecent} from '../../store/recentSearch';

function SearchResultGroup({reverse, searchResult}) {
  const dispatch = useDispatch();
  const [trigger] = useLazyGetForecastQuery();
  const handleItemPress = item => {
    dispatch(setSelectedCountry(item));
    // if item press from recent list, don't add to recent
    !reverse && dispatch(addItemToRecent(item));
    trigger(item.url);
  };
  const items = reverse ? [...searchResult].reverse() : searchResult;
  return (
    <View style={styles.container}>
      {items.map(item => (
        <SearchResultItem
          key={item.id}
          onPress={() => handleItemPress(item)}
          searchResultItem={item}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SearchResultGroup;
