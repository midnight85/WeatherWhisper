import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSelectedCountry} from '../../store/globalStateSlice';

function AccountScreen({navigation}) {
  const dispatch = useDispatch();

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
      <Button
        title="Clean selected country"
        onPress={() => {
          dispatch(setSelectedCountry({}));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
