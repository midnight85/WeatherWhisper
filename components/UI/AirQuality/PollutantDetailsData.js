import {AqiGood, AqiFair, AqiModerate, AqiPoor, AqiVeryPoor} from '../../Icons';
import {COLORS} from '../../../constants/GlobalStyles';

export const pollutantDetailsData = [
  {
    icon: AqiGood,
    title: 'Good',
    color: COLORS.aqiGood700,
    titleColor: COLORS.aqiGood900,
    backgroundColor: COLORS.aqiGood_ct300_12,
    description:
      'Air quality is considered satisfactory, and the general public is unlikely to experience any adverse health effects.',
  },
  {
    icon: AqiFair,
    title: 'Fair',
    color: COLORS.aqiFair700,
    titleColor: COLORS.aqiFair900,
    backgroundColor: COLORS.aqiFair_ct300_12,
    description:
      'Air quality is considered satisfactory and the population is unlikely to experience any adverse health effects, but sensitive individuals should remain cautious.',
  },
  {
    icon: AqiModerate,
    title: 'Moderate',
    color: COLORS.aqiModerate700,
    titleColor: COLORS.aqiModerate900,
    backgroundColor: COLORS.aqiModerate_ct300_12,
    description:
      'Air quality is acceptable, but sensitive individuals, such as those with respiratory or cardiovascular conditions, the elderly, and children, may experience minor health effects.',
  },
  {
    icon: AqiPoor,
    title: 'Poor',
    color: COLORS.aqiPoor700,
    titleColor: COLORS.aqiPoor900,
    backgroundColor: COLORS.aqiPoor_ct300_12,
    description:
      'Air quality in this range may have more significant health effects, particularly for sensitive groups. The general public may also experience some respiratory symptoms and aggravation of existing health conditions.',
  },
  {
    icon: AqiVeryPoor,
    title: 'Very poor',
    color: COLORS.aqiVeryPoor700,
    titleColor: COLORS.aqiVeryPoor900,
    backgroundColor: COLORS.aqiVeryPoor_ct300_12,
    description:
      'The air quality presents a high health risk to the general population. Breathing in such conditions can lead to severe respiratory distress and a range of health issues. It is imperative for everyone to limit outdoor activities and take necessary precautions to minimize exposure.',
  },
];
