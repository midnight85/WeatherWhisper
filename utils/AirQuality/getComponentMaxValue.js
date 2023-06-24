export function getComponentMaxValue(component) {
  switch (component) {
    case 'so2':
      return 350;
    case 'no2':
      return 200;
    case 'pm10':
      return 200;
    case 'pm2_5':
      return 75;
    case 'o3':
      return 180;
    case 'co':
      return 15400;
    default:
      return -1;
  }
}
