import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
} from 'react-native';
import {openweatherIcons} from '../../assets/openweather_icons';
import {ExpandMore} from '../Icons';
import {COLORS, FONT_WEIGHT, TEXT} from '../../constants/GlobalStyles';
import {fiveDaysForecast} from '../../data/FiveDaysForecast';
import {getDayName} from '../../utils/Forecast/getDayName';
import {adaptiveValue} from '../../utils/adaptiveValue';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const {list} = fiveDaysForecast;

// list.forEach(item => console.log(new Date(item.dt_txt)));

function DayForecastDropdown({dt_txt, main, icon, temp, children}) {
  const [showBody, setShowBody] = React.useState(false);
  const day = getDayName(dt_txt, 3);
  const animationController = React.useRef(new Animated.Value(0)).current;

  function toggleItem() {
    const config = {
      duration: 200,
      toValue: showBody ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
      delete: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
    setShowBody(!showBody);
  }

  const iconTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [pressed && styles.pressed]}
        onPress={toggleItem}>
        <View style={styles.topContainer}>
          <Text style={styles.day}>{day}</Text>
          <View style={[styles.flexRow, styles.middleColumn]}>
            <View style={styles.iconContainer}>
              <Image
                source={openweatherIcons[icon]}
                style={styles.weatherIcon}
              />
            </View>
            <Text style={styles.main}>{main}</Text>
          </View>
          <View style={[styles.flexRow, styles.rightColumn]}>
            <Text style={styles.temp}>{temp}°</Text>
            <Animated.View style={{transform: [{rotateZ: iconTransform}]}}>
              <ExpandMore
                size={24}
                color={COLORS.neutralColors600}
              />
            </Animated.View>
          </View>
        </View>
      </Pressable>
      {showBody && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bottomContainer}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}>
          {children}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleColumn: {
    flex: 1,
    columnGap: 14,
  },
  rightColumn: {
    justifyContent: 'space-between',
    flex: 0.4,
  },
  topContainer: {
    flex: 1,
    columnGap: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomContainer: {
    marginTop: 4,
    marginHorizontal: -16,
    height: adaptiveValue({initialScreenWidth: 328, value: 112}),
  },
  day: {
    color: COLORS.neutralColors700,
    ...FONT_WEIGHT.regular,
    ...TEXT.subT1,
    flex: 0.4,
  },
  iconContainer: {
    width: 40,
    height: 40,
    marginHorizontal: -10,
  },
  weatherIcon: {
    width: '100%',
    height: '100%',
  },
  main: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT2,
  },
  temp: {
    color: COLORS.neutralColors900,
    ...FONT_WEIGHT.medium,
    ...TEXT.subT1,
  },
  pressed: {
    opacity: 0.6,
  },
});

export default DayForecastDropdown;
