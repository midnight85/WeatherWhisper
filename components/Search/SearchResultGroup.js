import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SearchResultItem} from './index';
import {useDispatch} from 'react-redux';
import {setTrackedCity} from '../../store/globalStateSlice';
import {useLazyGetForecastQuery} from '../../store/weatherApiSlice';
import {addItemToRecent} from '../../store/recentSearchSlice';
import {FadeInDown, FadeOut, Layout} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

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
      {items.map((item, index) => (
        <Animated.View
          key={item.url}
          entering={FadeInDown.delay(index * 50)}
          exiting={FadeOut.duration(100)}>
          <SearchResultItem
            onPress={() => handleItemPress(item)}
            searchResultItem={item}
          />
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default SearchResultGroup;
