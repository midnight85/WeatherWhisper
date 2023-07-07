import React from 'react';

import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {COLORS} from '../constants/GlobalStyles';

const Loader = ({style}) => {
  return (
    <View style={[styles.loading, style && style]}>
      <ActivityIndicator
        size="large"
        color={COLORS.brandColor500}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loader;
