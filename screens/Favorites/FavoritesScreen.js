import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, IconButton} from '../../components/UI';
import {
  cleanAllFavorites,
  removeSelectedFromFavorite,
} from '../../store/favoritesSlice';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {HeaderLocation, InfoBox} from '../../components';
import {
  ArrowBack,
  Celsius,
  Delete,
  Fahrenheit,
  FavoritesNoFavorites,
} from '../../components/Icons';
import FavoriteItem from '../../components/Favorites/FavoriteItem';
import {setTrackedCity} from '../../store/globalStateSlice';

function FavoritesScreen({navigation}) {
  const dispatch = useDispatch();
  const favorites = useSelector(store => store.favorites);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const checkIsSelected = useCallback(
    item => {
      return selectedItems.some(selectedItem => selectedItem.url === item.url);
    },
    [selectedItems],
  );
  const handleLongPress = useCallback(
    item => {
      if (!isSelectionMode) {
        setIsSelectionMode(true);
        setSelectedItems([item]);
      }
    },
    [isSelectionMode],
  );
  const handlePress = useCallback(
    item => {
      if (isSelectionMode) {
        const selected = checkIsSelected(item);
        if (selected) {
          const newSelectedItems = selectedItems.filter(
            selectedItem => selectedItem.url !== item.url,
          );
          setSelectedItems(newSelectedItems);
        } else {
          setSelectedItems([...selectedItems, item]);
        }
      } else {
        dispatch(setTrackedCity(item));
      }
    },
    [dispatch, isSelectionMode, checkIsSelected, selectedItems],
  );
  const removeSelectedItems = useCallback(() => {
    if (selectedItems.length) {
      dispatch(removeSelectedFromFavorite(selectedItems));
    }
    setIsSelectionMode(false);
  }, [dispatch, selectedItems]);
  const disableSelectionMode = useCallback(() => {
    setIsSelectionMode(false);
    setSelectedItems([]);
  }, []);
  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerTitle: isSelectionMode
          ? selectedItems.length.toString()
          : 'Favorites',
        headerLeft: () =>
          isSelectionMode ? (
            <IconButton
              icon={ArrowBack}
              size={24}
              color={COLORS.neutralColors900}
              onPress={disableSelectionMode}
            />
          ) : null,
        headerLeftContainerStyle: {marginLeft: 4, paddingVertical: 4},
        headerRight: () =>
          isSelectionMode ? (
            <IconButton
              icon={Delete}
              size={24}
              color={COLORS.neutralColors900}
              onPress={removeSelectedItems}
            />
          ) : null,
        headerRightContainerStyle: {marginRight: 4, paddingVertical: 4},
      }),
    [navigation, isSelectionMode, selectedItems],
  );
  if (!favorites.length) {
    return (
      <View style={styles.noFavoritesContainer}>
        <InfoBox
          title="No Favorites"
          text="Cities you marked as favorite are shown here"
          icon={FavoritesNoFavorites}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          paddingTop: 16,
          paddingHorizontal: 16,
          paddingBottom: 48,
        }}>
        {!isSelectionMode && (
          <Button
            style={{alignSelf: 'flex-end', marginBottom: 24}}
            text="Clean all"
            onPress={() => dispatch(cleanAllFavorites())}
          />
        )}

        <View style={styles.itemsContainer}>
          {[...favorites].reverse().map(item => (
            <FavoriteItem
              key={item.url}
              isSelectionMode={isSelectionMode}
              isSelected={checkIsSelected(item)}
              onLongPress={() => handleLongPress(item)}
              onPress={() => handlePress(item)}
              {...item}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  noFavoritesContainer: {
    flex: 1,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.baseColors_white,
  },
  container: {
    backgroundColor: COLORS.baseColors_white,
  },
  itemsContainer: {
    rowGap: 16,
  },
  text: {
    color: 'red',
  },
});

export default FavoritesScreen;
