import {
  AqiGood,
  AqiFair,
  AqiModerate,
  AqiPoor,
  AqiVeryPoor,
} from '../components/Icons';
import {COLORS} from '../constants/GlobalStyles';

export const pollutantDetailsData = {
  1: {
    icon: AqiGood,
    title: 'Good',
    textColor: COLORS.aqiGood700,
    titleColor: COLORS.aqiGood900,
    indexColor: COLORS.aqiGood_ct500_16,
    backgroundColor: COLORS.aqiGood_ct300_12,
    description:
      'Air quality is considered satisfactory, and the general public is unlikely to experience any adverse health effects.',
  },
  2: {
    icon: AqiFair,
    title: 'Fair',
    textColor: COLORS.aqiFair700,
    titleColor: COLORS.aqiFair900,
    indexColor: COLORS.aqiFair_ct500_16,
    backgroundColor: COLORS.aqiFair_ct300_12,
    description:
      'Air quality is considered satisfactory and the population is unlikely to experience any adverse health effects, but sensitive individuals should remain cautious.',
  },
  3: {
    icon: AqiModerate,
    title: 'Moderate',
    textColor: COLORS.aqiModerate700,
    titleColor: COLORS.aqiModerate900,
    indexColor: COLORS.aqiFair_ct500_16,
    backgroundColor: COLORS.aqiModerate_ct300_12,
    description:
      'Air quality is acceptable, but sensitive individuals, such as those with respiratory or cardiovascular conditions, the elderly, and children, may experience minor health effects.',
  },
  4: {
    icon: AqiPoor,
    title: 'Poor',
    textColor: COLORS.aqiPoor700,
    titleColor: COLORS.aqiPoor900,
    indexColor: COLORS.aqiPoor_ct500_16,
    backgroundColor: COLORS.aqiPoor_ct300_12,
    description:
      'Air quality in this range may have more significant health effects, particularly for sensitive groups. The general public may also experience some respiratory symptoms and aggravation of existing health conditions.',
  },
  5: {
    icon: AqiVeryPoor,
    title: 'Very poor',
    textColor: COLORS.aqiVeryPoor700,
    titleColor: COLORS.aqiVeryPoor900,
    indexColor: COLORS.aqiVeryPoor_ct500_16,
    backgroundColor: COLORS.aqiVeryPoor_ct300_12,
    description:
      'The air quality presents a high health risk to the general population. Breathing in such conditions can lead to severe respiratory distress and a range of health issues. It is imperative for everyone to limit outdoor activities and take necessary precautions to minimize exposure.',
  },
};
