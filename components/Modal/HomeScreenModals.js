import React, {useCallback} from 'react';
import {Text, StyleSheet} from 'react-native';

import {MenuItem, ModalMenu} from './index';
import {Celsius, Location} from '../Icons';
import {
  setIsMetricUnits,
  setLocationModalVisible,
  setTrackedCity,
  setUnitsModalVisible,
} from '../../store/globalStateSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../UI';
import {SearchScreen} from '../../screens';
import {useNavigation} from '@react-navigation/native';
import {SEARCH_SCREEN} from '../../constants/ScreenNames';

function HomeScreenModals() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {trackedCity, isMetricUnits, unitsModalVisible, locationModalVisible} =
    useSelector(store => store.globalState);
  const favorites = useSelector(store => store.favorites);
  const handleLocationModalClose = useCallback(() => {
    dispatch(setLocationModalVisible(false));
  }, [dispatch]);
  const handleUnitsModalClose = useCallback(() => {
    dispatch(setUnitsModalVisible(false));
  }, [dispatch]);
  const setMetricUnits = useCallback(() => {
    dispatch(setIsMetricUnits(true));
  }, [dispatch]);
  const setImperialUnits = useCallback(() => {
    dispatch(setIsMetricUnits(false));
  }, [dispatch]);
  const handleNavigate = useCallback(() => {
    navigation.navigate(SEARCH_SCREEN);
    handleLocationModalClose();
  }, [navigation]);
  return (
    <>
      <ModalMenu
        modalVisible={unitsModalVisible}
        handleModalClose={handleUnitsModalClose}
        right>
        <MenuItem
          checked={isMetricUnits}
          text={'Celsius'}
          leftIcon={Celsius}
          onPress={() => {
            setMetricUnits();
            handleUnitsModalClose();
          }}
        />
        <MenuItem
          checked={!isMetricUnits}
          text={'Fahrenheit'}
          leftIcon={Celsius}
          onPress={() => {
            setImperialUnits();
            handleUnitsModalClose();
          }}
        />
      </ModalMenu>
      <ModalMenu
        modalVisible={locationModalVisible}
        handleModalClose={handleLocationModalClose}
        left>
        {favorites.length ? (
          favorites?.map(item => {
            const selected = trackedCity.url === item.url;
            return (
              <MenuItem
                key={item.url}
                checked={selected}
                text={item.name}
                leftIcon={Location}
                onPress={() => {
                  dispatch(setTrackedCity(item));
                  handleLocationModalClose();
                }}
              />
            );
          })
        ) : (
          <MenuItem
            text={'No favorite cities'}
            onPress={() => {
              handleLocationModalClose();
            }}
          />
        )}
        <Button
          text="Use Search"
          style={{width: '100%', paddingVertical: 14}}
          onPress={handleNavigate}
        />
      </ModalMenu>
    </>
  );
}

const styles = StyleSheet.create({});

export default HomeScreenModals;
