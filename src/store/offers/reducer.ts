import * as t from './actionTypes';
import { OffersState, OffersActionTypes } from './creatorsTypes';

export const initialValues: OffersState = {
  offers: [],
  currentOfferData: null,
  currentOfferCompanyDetail: null,
};

const newOfferReducer = (state = initialValues, action: OffersActionTypes): OffersState => {
  switch (action.type) {
    case t.SET_OFFERS_DATA:
      return { ...state, offers: action.offers };
    case t.ADD_OFFERS_DATA:
      return { ...state, offers: [...state.offers, ...action.offers] };
    case t.SET_CURRENT_OFFER_DATA:
      return { ...state, currentOfferData: action.offerData };
    case t.UPDATE_CURRENT_OFFER_IMAGES:
      return { ...state, currentOfferData: { ...state.currentOfferData, images: action.images } };
    case t.UPDATE_OFFER_IMAGES_BY_OFFER_SLUG:
      return {
        ...state,
        offers: state.offers.map((offer) => {
          if (offer.slug === action.offerSlug) {
            return { ...offer, images: action.images };
          }
          return offer;
        }),
      };
    case t.ADD_IMAGE_TO_CURRENT_OFFER: {
      if (state.currentOfferData) {
        return {
          ...state,
          currentOfferData: { ...state.currentOfferData, images: [...state.currentOfferData?.images, action.image] },
        };
      }
      return state;
    }
    case t.ADD_OFFER_IMAGE_TO_OFFERS_LIST_BY_OFFER_SLUG:
      return {
        ...state,
        offers: state.offers.map((offer) => {
          if (offer.slug === action.offerSlug) {
            return { ...offer, images: [...offer.images, action.image] };
          }
          return offer;
        }),
      };
    case t.SET_CURRENT_OFFER_COMPANY_DETAIL:
      return {
        ...state,
        currentOfferCompanyDetail: action.data,
      };
    default:
      return state;
  }
};

export default newOfferReducer;
