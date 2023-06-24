import {COLORS} from '../constants/GlobalStyles';

export const pollutantScaleStyles = {
  1: {
    backgroundColor: COLORS.aqiGood_ct500_12,
    textColor: COLORS.aqiGood700,
    titleColor: COLORS.aqiGood900,
    indicatorColor: COLORS.aqiGood500,
    qualitativeName: 'Good',
  },
  2: {
    backgroundColor: COLORS.aqiFair_ct500_12,
    textColor: COLORS.aqiFair700,
    titleColor: COLORS.aqiFair900,
    indicatorColor: COLORS.aqiFair500,
    qualitativeName: 'Fair',
  },
  3: {
    backgroundColor: COLORS.aqiModerate_ct500_12,
    textColor: COLORS.aqiModerate700,
    titleColor: COLORS.aqiModerate900,
    indicatorColor: COLORS.aqiModerate500,
    qualitativeName: 'Moderate',
  },
  4: {
    backgroundColor: COLORS.aqiPoor_ct500_12,
    textColor: COLORS.aqiPoor700,
    titleColor: COLORS.aqiPoor900,
    indicatorColor: COLORS.aqiPoor500,
    qualitativeName: 'Poor',
  },
  5: {
    backgroundColor: COLORS.aqiVeryPoor_ct500_12,
    textColor: COLORS.aqiVeryPoor700,
    titleColor: COLORS.aqiVeryPoor900,
    indicatorColor: COLORS.aqiVeryPoor500,
    qualitativeName: 'VeryPoor',
  },
};
