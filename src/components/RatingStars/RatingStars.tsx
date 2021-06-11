import React, { FC } from 'react';
import { View } from 'react-native';
import { times } from 'lodash';

import IconRatingEmpty from 'assets/iconRating.svg';
import IconRatingFull from 'assets/iconRatingFull.svg';

import styles from './styles';

interface Props {
  rated: number;
  total: number;
}

const RatingStars: FC<Props> = ({ rated, total }) => {
  const ratedContent = times(Math.floor(rated), (index) => <IconRatingFull style={styles.icon} key={index} />);
  const emptyContent = times(total - Math.floor(rated), (index) => <IconRatingEmpty style={styles.icon} key={index} />);

  return (
    <View style={styles.ratingStars}>
      {ratedContent}
      {emptyContent}
    </View>
  );
};

export default RatingStars;
