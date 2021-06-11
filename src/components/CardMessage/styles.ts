import { StyleSheet } from 'react-native';

import { variables } from 'res';

export default StyleSheet.create({
  cardDataRight: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  cardDataWrapper: {
    flex: 1,
  },
  cardImage: {
    borderRadius: variables.borderRadius.min,
    height: 46,
    width: 46,
  },
  cardImageWrapper: {
    flexShrink: 0,
    marginRight: variables.spacing.medium,
    width: 46,
  },
  cardTextWrapper: {
    paddingTop: variables.spacing.base,
  },
  cardTopWrapper: {
    flexDirection: 'row',
  },
  containerStyle: {
    backgroundColor: variables.colors.white,
    borderRadius: variables.borderRadius.min,
    elevation: 3,
    flexDirection: 'column',
    marginTop: variables.spacing.medium,
    paddingHorizontal: variables.spacing.medium,
    paddingVertical: variables.spacing.medium,
    shadowColor: variables.colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  nameTextWrapper: {
    alignSelf: 'baseline',
    flexGrow: 1,
    flexShrink: 1,
  },
  nameWrapper: { alignItems: 'flex-start', flexDirection: 'row', marginBottom: variables.spacing.min },
  unreadDot: {
    alignItems: 'baseline',
    backgroundColor: variables.colors.accentGreen,
    borderRadius: 4,
    flexShrink: 0,
    height: 8,
    marginLeft: variables.spacing.small,
    width: 8,
  },
});
