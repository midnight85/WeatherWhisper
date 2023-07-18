import React, {useCallback} from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useGetForecastQuery} from '../store/weatherApiSlice';
import {LocationHome} from './Icons';
import {COLORS, FONT_WEIGHT, TEXT} from '../constants/GlobalStyles';
import {Loader} from './index';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN} from '../constants/ScreenNames';

function CurrentLocationItem() {
  const navigation = useNavigation();
  const {trackedCity, isMetricUnits} = useSelector(store => store.globalState);
  const {
    data: weatherApiData,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetForecastQuery(trackedCity.url, {skip: !trackedCity.url});
  const handleNavigate = useCallback(() => {
    navigation.navigate(HOME_SCREEN);
  }, [navigation]);
  if (isLoading || isFetching) {
    return (
      <View style={[styles.container, {paddingVertical: 12}]}>
        <Loader />
      </View>
    );
  }
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={handleNavigate}>
      <LocationHome
        size={24}
        color={COLORS.neutralColors600}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headlineText}>{trackedCity.name}</Text>
        <Text style={styles.supportingText}>Current location</Text>
      </View>
      <Text style={styles.supportingText}>
        {isMetricUnits
          ? Math.round(weatherApiData?.current.temp_c)
          : Math.round(weatherApiData?.current.temp_f)}
        °
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.neutralColors500,
    backgroundColor: COLORS.baseColors_white,
    paddingVertical: 6,
    paddingLeft: 16,
    paddingRight: 24,
    flexDirection: 'row',
    columnGap: 16,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  headlineText: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  supportingText: {
    color: COLORS.neutralColors600,
    ...FONT_WEIGHT.medium,
    ...TEXT.body2,
  },
  pressed: {opacity: 0.7},
});

export default CurrentLocationItem;
