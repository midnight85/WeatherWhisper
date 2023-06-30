import React from 'react';
import {Text, StyleSheet, Linking, Alert} from 'react-native';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';

function ProvidedBy({dataText, source, url, style}) {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
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
