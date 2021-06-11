import { FullTheme } from 'react-native-elements';
import { variables } from './variables';

import * as fontNames from './fontNames';

export const basicTheme: FullTheme = {
  Accessory: {},
  AirbnbRating: {},
  Avatar: {},
  Badge: {},
  BottomSheet: {},
  Button: {},
  ButtonGroup: {},
  Card: {},
  CardDivider: {},
  CardFeaturedSubtitle: {},
  CardFeaturedTitle: {},
  CardImage: {},
  CardTitle: {},
  CheckBox: {},
  Divider: {},
  Header: {},
  Icon: {
    containerStyle: {},
    iconStyle: {},
    style: {
      backgroundColor: variables.colors.transparent,
    },
  },
  Image: {},
  Input: {},
  ListItem: {},
  ListItemButtonGroup: {},
  ListItemCheckBox: {},
  ListItemChevron: {},
  ListItemContent: {},
  ListItemInput: {},
  ListItemSubtitle: {},
  ListItemTitle: {},
  Overlay: {},
  PricingCard: {},
  Rating: {},
  SearchBar: {},
  Slider: {},
  SocialIcon: {},
  Text: {
    style: {
      color: variables.colors.white,
      fontSize: variables.fontSize.base,
      fontFamily: fontNames.SFCompactTextRegular,
    },
    bigger: {
      color: variables.colors.accentRed,
      fontSize: variables.fontSize.medium,
      fontFamily: fontNames.SFCompactTextRegular,
    },
    basic: {
      color: variables.colors.black,
      fontSize: variables.fontSize.medium,
      fontFamily: fontNames.SFCompactTextRegular,
    },
  },
  Tile: {},
  Tooltip: {},
  colors: {},
};
