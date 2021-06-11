import { Offer, OfferDetail, ProductImage, UserProfileDataObject } from 'models/types';
import * as actionTypes from './actionTypes';

const {
  SET_OFFERS_DATA,
  ADD_OFFERS_DATA,
  SET_CURRENT_OFFER_DATA,
  UPDATE_CURRENT_OFFER_IMAGES,
  UPDATE_OFFER_IMAGES_BY_OFFER_SLUG,
  ADD_OFFER_IMAGE_TO_OFFERS_LIST_BY_OFFER_SLUG,
  ADD_IMAGE_TO_CURRENT_OFFER,
  SET_CURRENT_OFFER_COMPANY_DETAIL,
} = actionTypes;

export interface OffersState {
  offers: Offer[];
  currentOfferData: OfferDetail | null;
  currentOfferCompanyDetail: UserProfileDataObject | null;
}

export interface SetOffersData {
  type: typeof SET_OFFERS_DATA;
  offers: Offer[];
}
export interface AddOffersData {
  type: typeof ADD_OFFERS_DATA;
  offers: Offer[];
}
export interface SetCurrentOfferData {
  type: typeof SET_CURRENT_OFFER_DATA;
  offerData: OfferDetail;
}
export interface UpdateCurrentOfferImages {
  type: typeof UPDATE_CURRENT_OFFER_IMAGES;
  images: ProductImage[];
}
export interface UpdateOfferImagesByOfferSlug {
  type: typeof UPDATE_OFFER_IMAGES_BY_OFFER_SLUG;
  images: ProductImage[];
  offerSlug: string;
}
export interface AddImageToCurrentOffer {
  type: typeof ADD_IMAGE_TO_CURRENT_OFFER;
  image: ProductImage;
}
export interface AddOfferImageToOffersListByOfferSlug {
  type: typeof ADD_OFFER_IMAGE_TO_OFFERS_LIST_BY_OFFER_SLUG;
  image: ProductImage;
  offerSlug: string;
}
export interface SetCurrentOfferCompanyDetail {
  type: typeof SET_CURRENT_OFFER_COMPANY_DETAIL;
  data: UserProfileDataObject;
}

export type OffersActionTypes =
  | SetOffersData
  | AddOffersData
  | SetCurrentOfferData
  | UpdateCurrentOfferImages
  | UpdateOfferImagesByOfferSlug
  | AddOfferImageToOffersListByOfferSlug
  | AddImageToCurrentOffer
  | SetCurrentOfferCompanyDetail;
