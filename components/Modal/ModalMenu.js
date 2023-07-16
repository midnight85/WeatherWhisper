import React from 'react';
import {StyleSheet, Pressable, View, Modal} from 'react-native';
import {
  COLORS,
  ELEVATION,
  FONT_WEIGHT,
  TEXT,
} from '../../constants/GlobalStyles';
import {adaptiveValue} from '../../utils/adaptiveValue';

function ModalMenu({modalVisible, handleModalClose, left, right, children}) {
  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={handleModalClose}>
      <Pressable
        style={[
          styles.container,
          left && {alignItems: 'flex-start'},
          right && {alignItems: 'flex-end'},
        ]}
        onPress={handleModalClose}>
        <View style={styles.modalContentContainer}>{children}</View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: '12%',
  },
  modalContentContainer: {
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
    marginVertical: 8,
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
