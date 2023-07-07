import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SearchResultItem} from './index';
import {useDispatch} from 'react-redux';
import {setSelectedCountry} from '../../store/globalStateSlice';
import {useLazyGetForecastQuery} from '../../store/weatherApiSlice';

function SearchResultGroup({searchResult}) {
  const dispatch = useDispatch();
  const [trigger] = useLazyGetForecastQuery();
  const handleItemPress = item => {
    dispatch(setSelectedCountry(item));
    trigger(item.url);
  };
  return (
    <View style={styles.container}>
      {searchResult?.map(item => (
        <SearchResultItem
          key={item.id}
          onPress={() => handleItemPress(item)}
          {...item}
        />
      ))}
    </View>
  );
}

// check search query len
const styles = StyleSheet.create({
  container: {},
});

export default SearchResultGroup;
