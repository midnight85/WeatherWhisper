import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import {IconButton} from '../UI';
import {
  FavoriteOutlined,
  FavoriteFilled,
  Location,
  ArrowInsert,
} from '../Icons';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';

function SearchResultItem({name, region, country, onPress}) {
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
        <View style={{flex: 1}}>
          <Text style={styles.text}>{name}</Text>
          <View>
            <Text
              style={{...FONT_WEIGHT.regular, ...TEXT.caption}}
              numberOfLines={1}>
              {country}
              {region && `, ${region}`}
            </Text>
          </View>
        </View>
        <ArrowInsert
          size={24}
          color={COLORS.neutralColors600}
        />
      </Pressable>
      <View style={styles.iconBtnContainer}>
        <IconButton
          icon={FavoriteOutlined}
          color={COLORS.brandColor900}
          onPress={() => {}}
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
  text: {
    flex: 1,
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
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
