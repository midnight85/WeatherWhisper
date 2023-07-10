import React, {useCallback, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import {IconButton} from '../UI';
import {
  FavoriteOutlined,
  FavoriteFilled,
  Location,
  ArrowInsert,
} from '../Icons';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import LocationTitle from '../LocationTitle';
import {
  addCountryToFavorite,
  removeCountryFromFavorite,
} from '../../store/favoritesSlice';
import {useDispatch, useSelector} from 'react-redux';

function SearchResultItem({searchResultItem, onPress}) {
  const dispatch = useDispatch();
  const favorites = useSelector(store => store.favorites);
  const {name, region, country} = searchResultItem;
  const [isInFavorites, setIsInFavorites] = useState(false);
  useEffect(() => {
    setIsInFavorites(
      favorites.some(favoriteItem => favoriteItem.url === searchResultItem.url),
    );
  }, [favorites, searchResultItem]);
  const handleAddToFavorite = () => {
    dispatch(addCountryToFavorite(searchResultItem));
  };
  const handleRemoveFromFavorite = () => {
    dispatch(removeCountryFromFavorite(searchResultItem));
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.pressableContainer,
          pressed && styles.pressed,
        ]}>
        <Location
          size={24}
          color={COLORS.neutralColors600}
        />
        <LocationTitle
          name={name}
          region={region}
          country={country}
          style={{flex: 1}}
        />
        <ArrowInsert
          size={24}
          color={COLORS.neutralColors600}
        />
      </Pressable>
      <View style={styles.iconBtnContainer}>
        <IconButton
          icon={isInFavorites ? FavoriteFilled : FavoriteOutlined}
          color={COLORS.brandColor900}
          onPress={
            isInFavorites ? handleRemoveFromFavorite : handleAddToFavorite
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 4,
  },
  pressableContainer: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  iconBtnContainer: {
    marginVertical: 4,
    padding: 4,
  },
  pressed: {
    opacity: 0.6,
  },
});

export default SearchResultItem;
