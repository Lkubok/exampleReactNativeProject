import React, { FC, useCallback } from 'react';
import { Image, Text, View, TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from 'react-native';

import ProductBadge from 'assets/goldBadge.svg';
import styles from './styles';
import { find } from 'lodash';
import { Offer } from 'models/types';
import i18n from 'translations';
import { PricingType } from 'navigation/screens/Main/NewOfferStack/CreateNewOfferDescription/types';

type Props = {
  offer: Offer;
  onItemPress: (slug: string) => void;
  style?: StyleProp<ViewStyle>;
};

const ProductCard: FC<Props> = ({ offer, onItemPress, style }) => {
  const renderOfferImage = useCallback(
    (uri: string, isHighlighted) => (
      <View style={styles.itemImageWrapper}>
        {isHighlighted && (
          <View style={styles.itemProductBadge}>
            <ProductBadge />
          </View>
        )}
        <Image source={{ uri }} style={styles.itemImage} />
      </View>
    ),
    [],
  );

  const renderOfferFooter = useCallback(
    (price: string, currency: string, unit: string, bottomPackage: string) => (
      <View style={styles.itemBottom}>
        {offer.pricing_type !== PricingType.agreement ? (
          <Text
            style={styles.itemBottomPrice}
            numberOfLines={1}
            ellipsizeMode="tail"
            adjustsFontSizeToFit
            minimumFontScale={0.8}>
            {price} {currency}/{unit}
          </Text>
        ) : (
          <Text
            style={styles.itemBottomPrice}
            numberOfLines={1}
            ellipsizeMode="tail"
            adjustsFontSizeToFit
            minimumFontScale={0.8}>
            {i18n.t('offer_detail_screen_by_agreement')}
          </Text>
        )}
        <Text style={styles.itemBottomPackage}>{bottomPackage}</Text>
      </View>
    ),
    [offer.pricing_type],
  );

  const renderOfferContent = useCallback(
    (name: string, city: string) => (
      <View style={styles.contentWrapper}>
        <Text style={styles.itemDataName} numberOfLines={2} ellipsizeMode="tail">
          {name}
        </Text>
        <View style={styles.itemLocationWrapper}>
          <Text style={styles.itemLocationText} numberOfLines={1}>
            {city}
          </Text>
        </View>
      </View>
    ),
    [],
  );

  const handleOfferPress = useCallback(
    (slug: string) => {
      onItemPress(slug);
    },
    [onItemPress],
  );

  const placeholderImage = find(offer?.images)?.urls.large as string;
  return (
    <View style={StyleSheet.flatten([styles.itemWrapper, style && style])}>
      <TouchableOpacity onPress={() => handleOfferPress(offer.slug)}>
        <View style={styles.item}>
          {renderOfferImage(placeholderImage, offer.customer.verified_partner)}
          <View style={styles.itemDataWrapper}>
            {renderOfferContent(offer.name, offer.city)}
            {renderOfferFooter(
              `${offer.price.amount}`,
              offer.currency,
              offer.unit.label,
              `${offer.quantity}${offer.unit.label}`,
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
