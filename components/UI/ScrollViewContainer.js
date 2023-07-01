import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {COLORS} from '../../constants/GlobalStyles';

function ScrollViewContainer({children, contentContainerStyle, style}) {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.contentContainerPadding,
        contentContainerStyle && contentContainerStyle,
      ]}
      style={[styles.container, style && style]}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainerPadding: {
    padding: 16,
  },
  container: {
    backgroundColor: COLORS.baseColors_white,
  },
});

export default ScrollViewContainer;
