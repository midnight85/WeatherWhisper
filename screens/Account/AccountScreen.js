import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

function AccountScreen({navigation}) {
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button
        title="AccountEditProfile"
        onPress={() => {
          navigation.navigate('AccountEditProfile');
        }}
      />
      <Button
        title="AccountUnits"
        onPress={() => {
          navigation.navigate('AccountUnits');
        }}
      />
      <Button
        title="AccountLocationSetting"
        onPress={() => {
          navigation.navigate('AccountLocationSetting');
        }}
      />
      <Button
        title="AccountAbout"
        onPress={() => {
          navigation.navigate('AccountAbout');
        }}
      />
      {/*<Button*/}
      {/*  title="AccountAbout"*/}
      {/*  onPress={() => {*/}
      {/*    navigation.navigate('AccountAbout');*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
