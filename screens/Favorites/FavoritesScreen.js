import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components/UI';
import {cleanAllFavorites} from '../../store/favoritesSlice';

function FavoritesScreen() {
  const favorites = useSelector(store => store.favorites);
  const dispatch = useDispatch();
  // console.log(favorites);
  if (!favorites.length) {
    return <Text style={styles.text}>no favorites</Text>;
  }

  return (
    <View>
      <Button
        text="Clean all"
        outlined
        onPress={() => dispatch(cleanAllFavorites())}
      />
      <Text style={styles.text}>Favorites</Text>
      {favorites?.map(item => (
        <Text
          key={item.url}
          style={styles.text}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export default FavoritesScreen;
