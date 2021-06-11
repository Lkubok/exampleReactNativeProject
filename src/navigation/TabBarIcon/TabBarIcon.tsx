import React, { FC, ReactNode, useMemo } from 'react';
import { View } from 'react-native';

import { screenNames, MainStackNames } from 'navigation';
import { variables } from 'res';

import MarketPlaceIcon from 'assets/tabBarMarketPlace.svg';
import NewsIcon from 'assets/tabBarNews.svg';
import InquiryIcon from 'assets/education.svg';
import ProfileIcon from 'assets/tabBarProfile.svg';

import styles from './styles';

interface Props {
  focused: boolean;
  routeName: MainStackNames;
  iconSize: number;
}

interface TabIconProps {
  children: ReactNode;
}

const TabBarIcon: FC<Props> = ({ routeName, iconSize, focused }) => {
  const iconColor = useMemo(() => (focused ? variables.colors.accentGreen : variables.colors.steel), [focused]);

  const TabIcon: FC<TabIconProps> = ({ children }) => {
    return <View style={styles.iconContainer}>{children}</View>;
  };

  switch (routeName) {
    case screenNames.MainStackNames.MarketPlaceStack:
      return (
        <TabIcon>
          <MarketPlaceIcon height={iconSize} width={iconSize} fill={iconColor} />
        </TabIcon>
      );
    case screenNames.MainStackNames.NewsStack:
      return (
        <TabIcon>
          <NewsIcon height={iconSize} width={iconSize} fill={iconColor} />
        </TabIcon>
      );
    case screenNames.MainStackNames.AdvisorStack:
      return (
        <TabIcon>
          <InquiryIcon height={iconSize} width={iconSize} fill={iconColor} />
        </TabIcon>
      );
    case screenNames.MainStackNames.ProfileStack:
      return (
        <TabIcon>
          <ProfileIcon height={iconSize} width={iconSize} fill={iconColor} />
        </TabIcon>
      );
    default:
      return (
        <TabIcon>
          <ProfileIcon height={iconSize} width={iconSize} color={iconColor} />
        </TabIcon>
      );
  }
};

export default TabBarIcon;
