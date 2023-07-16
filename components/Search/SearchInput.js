import React, {useEffect, useRef, useState} from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {ArrowBack, Search, SearchClear} from '../Icons';
import {IconButton} from '../UI';
import Animated, {FadeIn, FadeOut, FadeOutLeft} from 'react-native-reanimated';

function SearchInput({
  value,
  setSearchQuery,
  textInputInFocus,
  setTextInputInFocus,
}) {
  const textInputRef = useRef(null);
  const handleClearValue = () => {
    setSearchQuery('');
  };
  useEffect(() => {
    if (textInputRef.current && !textInputInFocus) {
      textInputRef.current.blur();
    }
  }, [textInputInFocus]);
  const handleTextInputInFocus = () => {
    setTextInputInFocus(false);
  };
  return (
    <View style={styles.container}>
      {textInputInFocus ? (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut.duration(200)}>
          <IconButton
            onPress={handleTextInputInFocus}
            icon={ArrowBack}
            color={COLORS.neutralColors600}
            style={{margin: -8}}
          />
        </Animated.View>
      ) : (
        <View>
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut.duration(200)}>
            <Search
              size={24}
              color={COLORS.neutralColors600}
            />
          </Animated.View>
        </View>
      )}
      <TextInput
        ref={textInputRef}
        style={styles.input}
        onChangeText={setSearchQuery}
        value={value}
        placeholder="Search for city..."
        placeholderTextColor={COLORS.neutralColors900}
        onFocus={() => {
          setTextInputInFocus(true);
        }}
        onBlur={() => {
          setTextInputInFocus(false);
        }}
      />
      {value && (
        <IconButton
          onPress={handleClearValue}
          icon={SearchClear}
          color={COLORS.neutralColors900}
          style={{margin: -10}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 16,
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: COLORS.neutralColors_ct500_12,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.regular,
    ...TEXT.subT1,

    /* Typography/Subtitle 1/Regular */
    // height: 24,
    // margin: 12,
    // borderWidth: 1,
    // padding: 16,
    padding: 0,
    margin: 0,
  },
});

export default SearchInput;
