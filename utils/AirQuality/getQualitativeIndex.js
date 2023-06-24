export function getQualitativeIndex(component, value) {
  switch (component) {
    case 'so2':
      if (value >= 0 && value < 20) {
        return 1; // Good
      } else if (value >= 20 && value < 80) {
        return 2; // Fair
      } else if (value >= 80 && value < 250) {
        return 3; // Moderate
      } else if (value >= 250 && value < 350) {
        return 4; // Poor
      } else if (value >= 350) {
        return 5; // Very Poor
      }
      break;
    case 'no2':
      if (value >= 0 && value < 40) {
        return 1; // Good
      } else if (value >= 40 && value < 70) {
        return 2; // Fair
      } else if (value >= 70 && value < 150) {
        return 3; // Moderate
      } else if (value >= 150 && value < 200) {
        return 4; // Poor
      } else if (value >= 200) {
        return 5; // Very Poor
      }
      break;
    case 'pm10':
      if (value >= 0 && value < 20) {
        return 1; // Good
      } else if (value >= 20 && value < 50) {
        return 2; // Fair
      } else if (value >= 50 && value < 100) {
        return 3; // Moderate
      } else if (value >= 100 && value < 200) {
        return 4; // Poor
      } else if (value >= 200) {
        return 5; // Very Poor
      }
      break;
    case 'pm2_5':
      if (value >= 0 && value < 10) {
        return 1; // Good
      } else if (value >= 10 && value < 25) {
        return 2; // Fair
      } else if (value >= 25 && value < 50) {
        return 3; // Moderate
      } else if (value >= 50 && value < 75) {
        return 4; // Poor
      } else if (value >= 75) {
        return 5; // Very Poor
      }
      break;
    case 'o3':
      if (value >= 0 && value < 60) {
        return 1; // Good
      } else if (value >= 60 && value < 100) {
        return 2; // Fair
      } else if (value >= 100 && value < 140) {
        return 3; // Moderate
      } else if (value >= 140 && value < 180) {
        return 4; // Poor
      } else if (value >= 180) {
        return 5; // Very Poor
      }
      break;
    case 'co':
      if (value >= 0 && value < 4400) {
        return 1; // Good
      } else if (value >= 4400 && value < 9400) {
        return 2; // Fair
      } else if (value >= 9400 && value < 12400) {
        return 3; // Moderate
      } else if (value >= 12400 && value < 15400) {
        return 4; // Poor
      } else if (value >= 15400) {
        return 5; // Very Poor
      }
      break;
    default:
      return -1; // Invalid component name
  }
}
