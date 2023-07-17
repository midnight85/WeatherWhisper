import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import {
  COLORS,
  ELEVATION,
  FONT_WEIGHT,
  TEXT,
} from '../../constants/GlobalStyles';
import {useSelector} from 'react-redux';
import {CheckBoxChecked, CheckBoxUnchecked, SearchClear} from '../Icons';
import {useGetForecastQuery} from '../../store/weatherApiSlice';
import {InfoBox, Loader} from '../index';
import {weatherIcons} from '../../assets/weather_icons';
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeOut,
  FadeOutLeft,
} from 'react-native-reanimated';

function FavoriteItem({
  name,
  region,
  country,
  url,
  isSelectionMode,
  isSelected,
  onLongPress,
  onPress,
}) {
  const {
    data: currentWeatherApiData,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetForecastQuery(url);
  const {trackedCity, isMetricUnits} = useSelector(store => store.globalState);
  const [isTrackedCity, setIsTrackedCity] = useState(false);
  const checkIsTrackedCity = () => {
    if (trackedCity?.url) {
      return url === trackedCity.url;
    }
    return false;
  };
  useEffect(() => {
    setIsTrackedCity(checkIsTrackedCity());
  }, [trackedCity]);
  if (isLoading || isFetching) {
    return (
      <View
        style={[
          styles.notSelectionModeContainer,
          styles.container,
          {
            height: 176,
            ...ELEVATION.small,
          },
        ]}>
        <Loader />
      </View>
    );
  }
  if (isError) {
    console.log(error);
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
    if (error?.error === 'TypeError: Network request failed') {
      return (
        <View
          style={[
            styles.container,
            styles.notSelectionModeContainer,
            {
              height: 176,
              ...ELEVATION.small,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <InfoBox title={error.error.split('TypeError:')[1]} />
        </View>
      );
    }
  }

  const localtime = currentWeatherApiData?.location.localtime;
  const [month, date, year] = new Date(localtime).toDateString().split(' ');
  const {temp_c, temp_f, condition} = currentWeatherApiData?.current;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [
        styles.container,
        isSelectionMode
          ? styles.selectionModeContainer
          : styles.notSelectionModeContainer,
        !pressed && !isSelectionMode && {...ELEVATION.small},
        pressed && styles.pressed,
      ]}>
      <View style={[styles.row]}>
        <Text style={styles.date}>
          {month} {date}, {year}
        </Text>
        {isSelectionMode ? (
          isSelected ? (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.selectCheckBoxContainer}>
              <CheckBoxChecked
                size={24}
                color={COLORS.brandColor500}
              />
            </Animated.View>
          ) : (
            <View style={styles.selectCheckBoxContainer}>
              <Animated.View
                entering={FadeIn}
                exiting={FadeOut}>
                <CheckBoxUnchecked
                  size={24}
                  color={COLORS.neutralColors900}
                />
              </Animated.View>
            </View>
          )
        ) : (
          isTrackedCity && (
            <Animated.Text
              entering={FadeInLeft}
              exiting={FadeOutLeft}
              style={styles.tracked}>
              Currently tracked
            </Animated.Text>
          )
        )}
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.country}>{country}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={weatherIcons[condition.icon.split('64x64')[1]]}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.temp}>
          {isMetricUnits ? Math.round(temp_c) : Math.round(temp_f)}°
        </Text>
        <Text style={styles.weatherStatus}>{condition.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  selectionModeContainer: {
    borderColor: COLORS.brandColor500,
  },
  notSelectionModeContainer: {
    borderColor: COLORS.baseColors_white,
  },
  selectCheckBoxContainer: {
    position: 'absolute',
    right: -6,
    top: -6,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'space-between',
    rowGap: 26,
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.baseColors_white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    color: COLORS.neutralColors600,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
  tracked: {
    color: COLORS.secondaryColor500,
    ...FONT_WEIGHT.medium,
    ...TEXT.overline,
  },
  name: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.h6,
  },
  country: {
    color: COLORS.neutralColors700,
    ...FONT_WEIGHT.regular,
    ...TEXT.caption,
  },
  temp: {
    color: COLORS.neutralColors600,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  weatherStatus: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.semiBold,
    ...TEXT.subT2,
  },
  imgContainer: {
    width: 50,
    height: 50,
    marginHorizontal: -10,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  pressed: {
    // opacity: 0.7,
  },
});

export default FavoriteItem;
