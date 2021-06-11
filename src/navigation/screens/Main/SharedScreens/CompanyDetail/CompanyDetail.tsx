import React, { FC, useCallback, useMemo, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { reduce, map } from 'lodash';
import { MaterialIndicator } from 'react-native-indicators';
import { StackNavigationProp } from '@react-navigation/stack';

import Phone from 'assets/phone.svg';
import Dots from 'assets/dots.svg';

import { ScreenContainer, RatingStars, Seller, Separator, SpacingWrapper, Typography, ProductCard } from 'components';
import { selectors as offerSelectors } from 'store/offers';
import { selectors as userSelectors } from 'store/user';

import { useTranslations, useSession, usePhone } from 'hooks';
import { screenNames } from 'navigation';
import { useGetUserRatingList } from 'api/user';
import { useGetListOfOffers } from 'api/offers';
import { variables } from 'res';

import MoreModal from '../SharedCompanyModal';

import styles from './styles';

const CompanyDetailScreen: FC = () => {
  const [userRating, setUserRating] = useState(0);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);
  const { i18n } = useTranslations();
  const { dial } = usePhone();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { navigate, push } = useNavigation<StackNavigationProp<any>>();
  const currentOfferCompanyDetail = useSelector(offerSelectors.getCurrentOfferCompanyDetail);
  const userCustomerSlug = useSelector(userSelectors.getCustomerSlug)!;
  const { name: routeName } = useRoute();
  const { sid } = useSession();

  const { responseData, runRequest: getUserRatings } = useGetUserRatingList({ sid });
  const {
    isLoading: areOffersLoading,
    responseData: offersResponse,
    runRequest: getOffersListFromUSer,
  } = useGetListOfOffers({ sid });
  const isCompanyMine = currentOfferCompanyDetail?.slug === userCustomerSlug;

  const renderRightNavbarContent = useMemo(
    () => (
      <>
        <TouchableOpacity
          hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}
          onPress={() => {
            dial(currentOfferCompanyDetail?.company?.phone_prefix, currentOfferCompanyDetail?.company?.telephone);
          }}>
          <Phone fill={variables.colors.accentRed} height={28} width={28} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsMoreModalVisible(true)}
          style={styles.rightButton}
          hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}>
          <Dots fill={variables.colors.accentRed} height={28} width={28} />
        </TouchableOpacity>
      </>
    ),
    [currentOfferCompanyDetail?.company?.telephone, currentOfferCompanyDetail?.company?.phone_prefix, dial],
  );

  useEffect(() => {
    getOffersListFromUSer({ customer: currentOfferCompanyDetail?.slug });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (responseData) {
      const allRatingScore = reduce(
        responseData.ratings,
        (prev, curr) => {
          return prev + curr.score;
        },
        0,
      );
      const numberOfStarsInRating = allRatingScore / responseData.ratings.length;
      setUserRating(numberOfStarsInRating || 0);
    }
  }, [responseData]);

  useEffect(() => {
    if (currentOfferCompanyDetail?.slug) {
      getUserRatings({ slug: currentOfferCompanyDetail?.slug });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoToReview = useCallback(() => {
    switch (routeName) {
      case screenNames.MainFlow.NewsStack.NewsCompanyDetail:
        navigate(screenNames.MainFlow.NewsStack.NewsCompanyRating, { customerSlug: currentOfferCompanyDetail?.slug });
        break;
      case screenNames.MainFlow.MarketPlaceStack.MarketPlaceCompanyDetail:
        navigate(screenNames.MainFlow.MarketPlaceStack.MarketPlaceCompanyRating, {
          customerSlug: currentOfferCompanyDetail?.slug,
        });
        break;
      default:
        // eslint-disable-next-line no-console
        console.error('Not handled by any navigator, please add paths');
    }
  }, [currentOfferCompanyDetail?.slug, navigate, routeName]);

  const handleGoToNextOffer = useCallback(
    (slug: string) => {
      switch (routeName) {
        case screenNames.MainFlow.NewsStack.NewsCompanyDetail:
          push(screenNames.MainFlow.NewsStack.NewsOfferDetail, { slug });
          break;
        case screenNames.MainFlow.MarketPlaceStack.MarketPlaceCompanyDetail:
          push(screenNames.MainFlow.MarketPlaceStack.MarketPlaceOfferDetail, { slug });
          break;
        default:
          // eslint-disable-next-line no-console
          console.error('Not handled by any navigator, please add paths');
      }
    },
    [push, routeName],
  );

  const navigationStackName = useMemo(
    () => (routeName === screenNames.MainFlow.NewsStack.NewsCompanyDetail ? 'news' : 'marketplace'),
    [routeName],
  );

  const renderIndicator = useMemo(() => <MaterialIndicator color={variables.colors.accentRed} size={32} />, []);

  const renderUserOffers = useMemo(() => {
    if (offersResponse) {
      return (
        <View style={styles.productsWrapper}>
          {map(offersResponse.products, (product) => (
            <View style={styles.singleCard}>
              <ProductCard
                offer={product}
                onItemPress={(slug) => {
                  handleGoToNextOffer(slug);
                }}
              />
            </View>
          ))}
        </View>
      );
    }
  }, [handleGoToNextOffer, offersResponse]);

  const renderHeaderContent = () => {
    return (
      <>
        <View style={styles.containerDataStyles}>
          <Seller
            logo={currentOfferCompanyDetail?.profile_photo?.urls?.am}
            company={currentOfferCompanyDetail?.company?.name}
            person={currentOfferCompanyDetail?.company?.full_name}
            verified={currentOfferCompanyDetail?.verified_partner}
          />
          <SpacingWrapper marginVertical="medium">
            <Separator />
          </SpacingWrapper>
          <View style={styles.header}>
            <Typography type="subheading" text={i18n.t('profile_rating_total')} />
            <Typography type="link" onPress={handleGoToReview} text={i18n.t('profile_rating_reviews')} />
          </View>
          <RatingStars rated={userRating} total={5} />
          <SpacingWrapper isHidden={!currentOfferCompanyDetail?.description} marginBottom="base">
            <Typography type="subheading" text={i18n.t('offer_detail_description')} />
          </SpacingWrapper>
          <SpacingWrapper isHidden={!currentOfferCompanyDetail?.description} marginBottom="big">
            <Typography text={currentOfferCompanyDetail?.description} />
          </SpacingWrapper>
        </View>
        <SpacingWrapper marginTop="base" marginBottom="big" marginHorizontal="medium">
          <Typography type="heading" text={i18n.t('profile_active_offers')} />
        </SpacingWrapper>
        {areOffersLoading ? renderIndicator : renderUserOffers}
      </>
    );
  };

  const renderModal = useMemo(
    () => (
      <MoreModal
        hideCallback={() => {
          setIsMoreModalVisible(false);
        }}
        isVisible={isMoreModalVisible}
        stack={navigationStackName}
      />
    ),
    [isMoreModalVisible, navigationStackName],
  );

  return (
    <>
      <ScreenContainer
        navbarCenter={i18n.t('profile_company_detail_heading')}
        fullWidth
        navbarRight={isCompanyMine ? null : renderRightNavbarContent}
        withBackButton
        withBottomNavigation
        bgColor={variables.colors.whiteTwo}>
        <ScrollView contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
          {renderHeaderContent()}
        </ScrollView>
      </ScreenContainer>
      {renderModal}
    </>
  );
};

export default CompanyDetailScreen;
