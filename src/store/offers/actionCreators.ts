import { Offer, OfferDetail, ProductImage, UserProfileDataObject } from 'models/types';

import * as t from './actionTypes';
import { OffersActionTypes } from './creatorsTypes';

export const setOffersData = (offers: Offer[]): OffersActionTypes => ({
  offers,
  type: t.SET_OFFERS_DATA,
});

export const addOffersData = (offers: Offer[]): OffersActionTypes => ({
  offers,
  type: t.ADD_OFFERS_DATA,
});

export const setCurrentOfferData = (offerData: OfferDetail): OffersActionTypes => ({
  offerData,
  type: t.SET_CURRENT_OFFER_DATA,
});

export const updateCurrentOfferImages = (images: ProductImage[]): OffersActionTypes => ({
  images,
  type: t.UPDATE_CURRENT_OFFER_IMAGES,
});

export const updateOfferImagesByOfferSlug = (images: ProductImage[], offerSlug: string): OffersActionTypes => ({
  offerSlug,
  images,
  type: t.UPDATE_OFFER_IMAGES_BY_OFFER_SLUG,
});

export const addImageToCurrentOffer = (image: ProductImage): OffersActionTypes => ({
  image,
  type: t.ADD_IMAGE_TO_CURRENT_OFFER,
});

export const addOfferImageToOffersListByOfferSlug = (image: ProductImage, offerSlug: string): OffersActionTypes => ({
  offerSlug,
  image,
  type: t.ADD_OFFER_IMAGE_TO_OFFERS_LIST_BY_OFFER_SLUG,
});

export const setCurrentOfferCompanyDetail = (data: UserProfileDataObject): OffersActionTypes => ({
  data,
  type: t.SET_CURRENT_OFFER_COMPANY_DETAIL,
});
