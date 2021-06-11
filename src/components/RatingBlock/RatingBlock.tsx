import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { times } from 'lodash';

import { variables } from 'res';
import { Typography } from 'components';
import { useTranslations } from 'hooks';

import IconRatingEmpty from 'assets/iconRatingEmpty.svg';

import styles from './styles';
interface Props {
  setRating: (rating: number) => void;
  rating: number;
  onDismiss: () => void;
}

const RatingBlock: FC<Props> = ({ setRating, rating, onDismiss }) => {
  const { i18n } = useTranslations();

  const ratingContent = times(5, (index) => (
    <TouchableOpacity
      onPress={() => setRating(index + 1)}
      hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}
      key={index}>
      <IconRatingEmpty
        style={styles.icon}
        fill={rating > index ? variables.colors.orange_primary : variables.colors.white}
      />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Typography type="subheading" text={i18n.t('shop_rating')} />
          <TouchableOpacity onPress={onDismiss} hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}>
            <Text style={styles.link}>{i18n.t('messages_rating_dismiss')}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.messageStyle}>{i18n.t('messages_rating_hello')}</Text>
        <Text style={styles.messageStyle}>{i18n.t('messages_rating_text')}</Text>
        <View style={styles.emptyBox} />
        <Text style={styles.messageStyle}>{i18n.t('messages_rating_satisfaction')}</Text>
        <View style={styles.ratingStars}>{ratingContent}</View>
      </View>
    </View>
  );
};

export default RatingBlock;
