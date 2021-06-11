import { Offer, OfferDetail, UserProfileDataObject } from 'models/types';
import { RootReducerState } from 'store/reducers';

export const getOffers: (state: RootReducerState) => Offer[] = (state) => state.offers.offers;
export const getCurrentOfferData: (state: RootReducerState) => OfferDetail | null = (state) =>
  state.offers.currentOfferData;
export const getCurrentOfferCompanyDetail: (state: RootReducerState) => UserProfileDataObject | null = (state) =>
  state.offers.currentOfferCompanyDetail;
