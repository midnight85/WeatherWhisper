import React from 'react';
import {Text, StyleSheet, Linking, Alert} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';

function ProvidedBy({dataText, source, url, style}) {
  const handlePress = React.useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);
  return (
    <Text style={[styles.text, style && style]}>
      {dataText} provided by
      <Text
        style={[styles.text, styles.link]}
        onPress={handlePress}>
        {' '}
        {source}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...FONT_WEIGHT.regular,
    ...TEXT.body2,
    color: COLORS.neutralColors700,
  },
  link: {
    color: COLORS.secondaryColor600,
    textDecorationLine: 'underline',
  },
});

export default ProvidedBy;
