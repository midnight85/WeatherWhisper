import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {SearchResultItem} from './index';
import {useDispatch} from 'react-redux';
import {setTrackedCity} from '../../store/globalStateSlice';
import {useLazyGetForecastQuery} from '../../store/weatherApiSlice';
import {addItemToRecent} from '../../store/recentSearchSlice';
import {FadeInDown, FadeOut, Layout} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN} from '../../constants/ScreenNames';

function SearchResultGroup({reverse, searchResult}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [trigger] = useLazyGetForecastQuery();
  const handleItemPress = item => {
    dispatch(setTrackedCity(item));
    // if item press from recent list, don't add to recent
    !reverse && dispatch(addItemToRecent(item));
    trigger(item.url);
    navigation.navigate(HOME_SCREEN);
  };
  const items = reverse ? [...searchResult].reverse() : searchResult;
  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchResultGroup;
