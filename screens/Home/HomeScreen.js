import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {AQI_DETAILS, FIVE_DAY_FORECAST} from '../../constants/ScreenNames';

function HomeScreen({navigation}) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>Home1</Text>
      <Button
        title="GoForecast"
        onPress={() => navigation.navigate(FIVE_DAY_FORECAST)}
      />
      <Button
        title="GoAqiDetails"
        onPress={() => navigation.navigate(AQI_DETAILS)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
