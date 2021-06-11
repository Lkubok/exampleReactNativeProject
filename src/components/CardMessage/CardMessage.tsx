import Typography from 'components/Typography';
import React, { FC } from 'react';
import { Image, View } from 'react-native';
import dayjs from 'dayjs';

import { useNavigation } from '@react-navigation/native';
import { screenNames } from 'navigation';

import styles from './styles';
import { variables } from 'res';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { actions as offerActions } from 'store/offers';

export type CardMessageParamsProps = {
  offer_slug: string;
  customer_slug: string;
  recipientSlug: string;
  offerName: string;
};

interface CardMessageProps {
  imageUrl: string | undefined;
  name: string;
  time: string;
  productName: string;
  unread: boolean;
  message: string;
  recipientName: string;
  recipientPhoto: string;
  recipientVerified: boolean;
  recipientCompanyName: string;
  params?: CardMessageParamsProps;
}

export interface Props {
  item: CardMessageProps;
}

const CardMessage: FC<Props> = ({ item }) => {
  const { navigate } = useNavigation();
  const { time, recipientName, recipientPhoto } = item;
  const dispatch = useDispatch();
  const formattedDate = dayjs(time).format('DD.MM.YYYY');

  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() => {
        dispatch(offerActions.setCurrentOfferData(null));

        navigate(screenNames.MainStackNames.NewsStack, {
          screen: screenNames.MainFlow.NewsStack.NewsDetail,
          params: {
            ...item.params,
            recipientName: item.recipientName,
            recipientPhoto: item.recipientPhoto,
            recipientCompanyName: item.recipientCompanyName,
            recipientVerified: item.recipientVerified,
          },
        });
      }}>
      <View style={styles.cardTopWrapper}>
        {recipientPhoto && (
          <View style={styles.cardImageWrapper}>
            <Image source={{ uri: recipientPhoto }} style={styles.cardImage} />
            {/* TODO: ADD VERIFIED BADGE */}
          </View>
        )}
        <View style={styles.cardDataWrapper}>
          <View style={styles.nameWrapper}>
            <View style={styles.nameTextWrapper}>
              <Typography type="subheading" text={recipientName} />
            </View>
            <View style={styles.cardDataRight}>
              <Typography type="text-muted" text={formattedDate} />
              {item.unread && <View style={styles.unreadDot} />}
            </View>
          </View>
          <Typography color={variables.colors.accentGreen} type="small" text={item.productName} />
        </View>
      </View>
      <View style={styles.cardTextWrapper}>
        <Typography bold={item.unread} type="text" text={item.message} />
      </View>
    </TouchableOpacity>
  );
};

export default CardMessage;
