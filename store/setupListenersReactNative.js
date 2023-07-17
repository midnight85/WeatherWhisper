import {setupListeners} from '@reduxjs/toolkit/query';
import {AppState} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export const setupListenersReactNative = dispatch => {
  let initialized = false;
  setupListeners(
    dispatch,
    (dispatch, {onFocus, onFocusLost, onOnline, onOffline}) => {
      let unsubscribeOnChange;
      let unsubscribeOnNetworkStatusChange;

      if (!initialized) {
        // Handle focus events
        unsubscribeOnChange = AppState.addEventListener('change', state => {
          if (state === 'active') {
            dispatch(onFocus());
          } else if (state === 'background') {
            dispatch(onFocusLost());
          }
        });
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
        unsubscribeOnChange?.remove();
        unsubscribeOnNetworkStatusChange?.();
        initialized = false;
      };
    },
  );
};
