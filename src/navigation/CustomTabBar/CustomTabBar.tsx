/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC, useEffect } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';

import Plus from 'assets/cross2.svg';
import { useTheme, useTranslations, useTabBarVisibility, useNewOfferDialogBox } from 'hooks';
import { NewOfferDialogBox } from 'components';
import { navigationTabBarHeight } from 'utils';

import * as screenNames from '../screenNames';
import TabBarIcon from '../TabBarIcon';
import styles from './styles';

const { height } = Dimensions.get('window');

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any;
  navigate: (tabName: string) => void;
}

const CustomTabBar: FC<Props> = ({ navigate, state }) => {
  const { isOpen, setIsOpen } = useNewOfferDialogBox();
  const { theme } = useTheme();
  const { i18n } = useTranslations();
  const { isTabBarVisible } = useTabBarVisibility();
  const isOpened = useSharedValue(0);
  const opacityShared = useSharedValue(0);
  const isTabBarVisibleSharedValue = useSharedValue(1);
  const tabBarHeightSharedValue = useSharedValue(1);
  const derived = useDerivedValue(() => {
    return isOpened.value * (height + 80);
  });

  const overlayTranslation = useAnimatedStyle(() => {
    return { transform: [{ translateY: -derived.value }] };
  });

  const overlayOpacity = useAnimatedStyle(() => {
    return { opacity: opacityShared.value };
  });

  const tabBarTranslation = useAnimatedStyle(() => {
    return { transform: [{ translateY: (1 - isTabBarVisibleSharedValue.value) * 140 }] };
  });

  const tabBarAnimHeight = useAnimatedStyle(() => {
    return { height: tabBarHeightSharedValue.value * navigationTabBarHeight };
  });

  useEffect(() => {
    if (isTabBarVisible) {
      isTabBarVisibleSharedValue.value = withTiming(1, {
        duration: 100,
        easing: Easing.out(Easing.ease),
      });
    } else {
      isTabBarVisibleSharedValue.value = withTiming(0, {
        duration: 100,
        easing: Easing.in(Easing.ease),
      });
    }
  }, [isTabBarVisible, isTabBarVisibleSharedValue]);

  useEffect(() => {
    if (isTabBarVisible) {
      tabBarHeightSharedValue.value = 1;
    } else {
      tabBarHeightSharedValue.value = withTiming(0, {
        duration: 100,
        easing: Easing.in(Easing.ease),
      });
    }
  }, [isTabBarVisible, tabBarHeightSharedValue]);

  const animationOpen = () => {
    isOpened.value = withTiming(1, {
      duration: 300,
      easing: Easing.in(Easing.ease),
    });
    opacityShared.value = withDelay(300, withSpring(1));
  };

  const animationClose = () => {
    opacityShared.value = withSpring(0);
    isOpened.value = withDelay(
      300,
      withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      }),
    );
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      animationOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <Animated.View style={tabBarTranslation}>
        <Animated.View style={[styles.tabBar, tabBarAnimHeight]}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.menuPositionContainer}
            onPress={() => {
              navigate(screenNames.MainStackNames.MarketPlaceStack);
            }}>
            <View style={styles.iconContainer}>
              <TabBarIcon
                iconSize={24}
                focused={state.index === 0}
                routeName={screenNames.MainStackNames.MarketPlaceStack}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[theme.Text?.small, styles.text, state.index === 0 && styles.textActive]}>
                {i18n.t('tab_navigator_marketplace')}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.menuPositionContainer}
            onPress={() => {
              navigate(screenNames.MainStackNames.NewsStack);
            }}>
            <View style={styles.iconContainer}>
              <TabBarIcon iconSize={24} focused={state.index === 1} routeName={screenNames.MainStackNames.NewsStack} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[theme.Text?.small, styles.text, state.index === 1 && styles.textActive]}>
                {i18n.t('tab_navigator_news')}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.plusButtonWrapper}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.plusButtonContainer}
              onPress={() => (isOpened.value === 0 ? animationOpen() : animationClose())}>
              <Plus height={14} width={14} fill="red" />
            </TouchableOpacity>
            <Text style={[theme.Text?.small, styles.textUnderPlusIcon]}>{i18n.t('tab_navigator_new_offer')}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.menuPositionContainer}
            onPress={() => {
              navigate(screenNames.MainStackNames.AdvisorStack);
            }}>
            <View style={styles.iconContainer}>
              <TabBarIcon
                iconSize={24}
                focused={state.index === 2}
                routeName={screenNames.MainStackNames.AdvisorStack}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[theme.Text?.small, styles.text, state.index === 2 && styles.textActive]}>
                {i18n.t('tab_navigator_inquiry')}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.menuPositionContainer}
            onPress={() => {
              navigate(screenNames.MainStackNames.ProfileStack);
            }}>
            <View style={styles.iconContainer}>
              <TabBarIcon
                iconSize={24}
                focused={state.index === 3}
                routeName={screenNames.MainStackNames.ProfileStack}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[theme.Text?.small, styles.text, state.index === 3 && styles.textActive]}>
                {i18n.t('tab_navigator_profile')}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      <Animated.View style={[overlayTranslation, overlayOpacity, styles.overlay]}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={() => (isOpened.value === 0 ? animationOpen() : animationClose())}>
          <NewOfferDialogBox onOptionPress={() => (isOpened.value === 0 ? animationOpen() : animationClose())} />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default CustomTabBar;
