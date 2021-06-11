import React, { FunctionComponent, useMemo, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { MaterialIndicator } from 'react-native-indicators';
import { map, reduce } from 'lodash';
import { useRoute, RouteProp } from '@react-navigation/native';

import { ChatBubble, ScreenContainer, RatingStars, Seller, Separator, SpacingWrapper, Typography } from 'components';
import { useTranslations, useSession, usePhone } from 'hooks';
import { variables } from 'res';
import { useGetUserRatingList } from 'api/user';
import { selectors as userSelectors } from 'store/user';
import { selectors as offerSelectors } from 'store/offers';
import { screenNames, NewsStackParamList } from 'navigation';

import Phone from 'assets/phone.svg';
import Dots from 'assets/dots.svg';

import MoreModal from '../SharedCompanyModal';

import styles from './styles';

const ProfileCompanyRating: FunctionComponent = () => {
  const [downloadedUserRating, setDownloadedUserRating] = useState(0);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false);
  const { i18n } = useTranslations();
  const { sid } = useSession();
  const currentOfferData = useSelector(offerSelectors.getCurrentOfferData);
  const { dial } = usePhone();

  const { params, name: routeName } = useRoute<
    RouteProp<NewsStackParamList, typeof screenNames.MainFlow.NewsStack.NewsCompanyRating>
  >();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userCustomerSlug = useSelector(userSelectors.getCustomerSlug)!;
  const userProfileData = useSelector(userSelectors.getProfileData);
  const userStatusData = useSelector(userSelectors.getStatus);
  const { isLoading, responseData, runRequest: getUserRatings } = useGetUserRatingList({ sid });

  useEffect(() => {
    getUserRatings({ slug: params?.customerSlug ?? userCustomerSlug });
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
      setDownloadedUserRating(numberOfStarsInRating);
    }
  }, [responseData]);

  const renderRightNavbarContent = useMemo(
    () => (
      <>
        <TouchableOpacity
          hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}
          onPress={() => {
            dial(currentOfferData?.seller_phone_prefix, currentOfferData?.seller_phone);
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
    [currentOfferData?.seller_phone, currentOfferData?.seller_phone_prefix, dial],
  );

  const renderRatings = useMemo(
    () => (
      <>
        {responseData &&
          responseData?.ratings.length > 0 &&
          map(responseData?.ratings, (rating, index) => (
            <ChatBubble
              key={`${rating.created}_${index}`}
              fullWidth
              heading={`${rating.name}, ${rating.customer.label}`}
              mine={false}
              rating={rating.score}
              message={rating.text}
              date={rating.created}
              pressReplyCallback={() => {}}
            />
          ))}
      </>
    ),
    [responseData],
  );

  const renderIndicator = useMemo(() => <MaterialIndicator color={variables.colors.accentRed} size={32} />, []);

  const isMyRating = useMemo(() => params?.customerSlug === userCustomerSlug, [params?.customerSlug, userCustomerSlug]);

  const userRating = useMemo(() => {
    if (isMyRating) {
      return userProfileData?.aggregate_rating ?? 0;
    } else {
      return downloadedUserRating;
    }
  }, [downloadedUserRating, isMyRating, userProfileData?.aggregate_rating]);

  const renderHeaderContent = () => {
    return (
      <>
        <View style={styles.containerDataStyles}>
          <Seller
            logo={
              isMyRating
                ? userProfileData?.profile_photo?.urls?.am
                : currentOfferData?.customer?.profile_photo?.urls?.am
            }
            company={isMyRating ? userProfileData?.company?.name : currentOfferData?.customer.label}
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            person={
              isMyRating ? `${userStatusData?.first_name} ${userStatusData?.last_name}` : currentOfferData?.seller_name
            }
            verified={isMyRating ? userStatusData?.verified_partner : currentOfferData?.customer.verified_partner}
          />
          <SpacingWrapper marginVertical="medium">
            <Separator />
          </SpacingWrapper>
          <SpacingWrapper>
            <View style={styles.header}>
              <Typography type="subheading" text={i18n.t('profile_rating_total')} />
            </View>
            <RatingStars rated={userRating || 0} total={5} />
          </SpacingWrapper>
        </View>

        <SpacingWrapper marginBottom="big" marginHorizontal="medium">
          <Typography type="heading" text={i18n.t('profile_rating_users_reviews')} />
        </SpacingWrapper>
        <View style={styles.containerDataStyles}>{isLoading ? renderIndicator : renderRatings}</View>
      </>
    );
  };

  const navigationStackName = useMemo(() => {
    if (routeName === screenNames.MainFlow.NewsStack.NewsCompanyRating) {
      return 'news';
    } else if (routeName === screenNames.MainFlow.MarketPlaceStack.MarketPlaceCompanyRating) {
      return 'marketplace';
    } else {
      return 'profile';
    }
  }, [routeName]);

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
        navbarCenter={i18n.t('profile_company_rating_heading')}
        fullWidth
        navbarRight={isMyRating ? null : renderRightNavbarContent}
        withBackButton
        withBottomNavigation
        bgColor={variables.colors.whiteTwo}>
        <ScrollView showsVerticalScrollIndicator={false}>{renderHeaderContent()}</ScrollView>
      </ScreenContainer>
      {renderModal}
    </>
  );
};

export default ProfileCompanyRating;
