import React from 'react';
import {Text, StyleSheet, Pressable, View, Modal} from 'react-native';
import {Celsius, Check, Fahrenheit} from '../Icons';
import {
  COLORS,
  ELEVATION,
  FONT_WEIGHT,
  TEXT,
} from '../../constants/GlobalStyles';
import {adaptiveValue} from '../../utils/adaptiveValue';
import MenuItem from './MenuItem';

function ModalMenu() {
  const [modalVisible, setModalVisible] = React.useState(true);

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      style={{backgroundColor: 'red'}}>
      <Pressable
        style={styles.container}
        onPress={event => {
          // setModalVisible(false);
        }}>
        <View style={styles.modalContentContainer}>
          <Pressable
            style={({pressed}) => [
              pressed && styles.pressed,
              styles.tempContainer,
            ]}
            onPress={() => {}}>
            <View style={styles.leftIcon}>
              <Fahrenheit
                size={24}
                color={COLORS.neutralColors600}
              />
            </View>
            <Text style={styles.text}>Fahrenheit</Text>
            <View style={styles.rightIcon}>
              <Check
                size={24}
                color={COLORS.brandColor500}
              />
            </View>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              pressed && styles.pressed,
              styles.tempContainer,
            ]}
            onPress={() => {}}>
            <View style={styles.leftIcon}>
              <Celsius
                size={24}
                color={COLORS.neutralColors600}
              />
            </View>
            <Text style={styles.text}>Celsius</Text>
            {/*<Check*/}
            {/*  size={24}*/}
            {/*  color={COLORS.brandColor500}*/}
            {/*/>*/}
          </Pressable>
          <MenuItem
            checked
            text={'Test'}
            leftIcon={Fahrenheit}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContentContainer: {
    // position: 'absolute',
    // right: 16 + 30,
    // top: 80,
    padding: 8,
    borderRadius: 12,
    width: adaptiveValue({value: 216}),
    backgroundColor: COLORS.baseColors_white,
    ...ELEVATION.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
  tempContainer: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    columnGap: 12,
    justifyContent: 'space-between',
    backgroundColor: COLORS.neutralColors_ct400_16,
  },
  text: {
    flex: 1,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
    color: COLORS.neutralColors900,
  },
  leftIcon: {},
  rightIcon: {},
});

export default ModalMenu;
