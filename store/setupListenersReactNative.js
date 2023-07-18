import {setupListeners} from '@reduxjs/toolkit/query';
import NetInfo from '@react-native-community/netinfo';

export const setupListenersReactNative = dispatch => {
  let initialized = false;
  setupListeners(
    dispatch,
    (dispatch, {onFocus, onFocusLost, onOnline, onOffline}) => {
      let unsubscribeOnNetworkStatusChange;
      if (!initialized) {
        // Handle connection events
        unsubscribeOnNetworkStatusChange = NetInfo.addEventListener(state => {
          if (state.isConnected) {
            dispatch(onOnline());
          } else {
            dispatch(onOffline());
          }
        });
        initialized = true;
      }
      // Unsubscribe
      return () => {
        unsubscribeOnNetworkStatusChange?.();
        initialized = false;
      };
    },
  );
};
