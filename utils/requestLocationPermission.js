import {Alert, Linking, PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async (
  isNever_ask_againPermission,
  setIsNever_ask_again,
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Location permission',
        message:
          'The application requires permission to use the current location',
        buttonPositive: 'OK',
      },
    );
    // console.log('granted', granted);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission "Granted"');
      setIsNever_ask_again(false);
      return true;
    } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
      console.log('Location permission "Denied"');
      setIsNever_ask_again(false);
      return false;
    } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      console.log('Location permission "Never ask again"');
      if (isNever_ask_againPermission) {
        // Redirect to app settings page
        Alert.alert(
          'Location permission',
          'Allow the application to use the current location in the App info > Permissions',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
        );
      }
      setIsNever_ask_again(true);
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
