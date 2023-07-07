import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button} from '../UI';
import {Location} from '../Icons';
import {COLORS, TEXT} from '../../constants/GlobalStyles';
import {SearchInput} from './index';
import {useSelector} from 'react-redux';

function SearchBar({
  searchQuery,
  setSearchQuery,
  textInputFocus,
  setTextInputFocus,
}) {
  const {selectedCountry} = useSelector(store => store.globalState);
  return (
    <View style={styles.searchBarContainer}>
      <SearchInput
        value={searchQuery}
        setSearchQuery={setSearchQuery}
        textInputFocus={textInputFocus}
        setTextInputFocus={setTextInputFocus}
      />
      <Button
        outlined
        text="Define my location"
        leftIcon={Location}
        style={{columnGap: 16, paddingVertical: 16}}
        textStyle={{...TEXT.subT1, textAlign: 'left', flex: 1}}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutralColors200,
    rowGap: 16,
  },
});

export default SearchBar;
