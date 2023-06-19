import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function OnboardingScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>OnboardingScreen</Text>
      <Button
        title={'Go  to  tabs'}
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default OnboardingScreen;
