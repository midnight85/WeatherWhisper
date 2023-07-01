import {Dimensions} from 'react-native';

// function allows you to adjust the value based on the layout width of the screen, scaling it proportionally for different screen sizes
export function adaptiveValue({initialScreenWidth = 360, value}) {
  // layout screen width
  // const screenWidth = 360;
  const currentScreenWidth = Dimensions.get('window').width;
  const screenWidthRatio = currentScreenWidth / initialScreenWidth;
  return value * screenWidthRatio;
}
