import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home1</Text>
      <Button
        title="GoForecast"
        onPress={() => navigation.navigate('Forecast')}
      />
      <Button
        title="GoAqiDetails"
        onPress={() => navigation.navigate('AqiDetails')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
