import { RootReducerState } from 'store/reducers';

import { UserProfileDataObject, UserStatus, ProductMessageThread } from 'models/types';

export const getUserData: (state: RootReducerState) => UserProfileDataObject | undefined = (state) =>
  state.user.userData;

export const getUserThreadListData: (state: RootReducerState) => ProductMessageThread[] | undefined = (state) =>
  state.user.userThreadListData;

export const getStatus: (state: RootReducerState) => UserStatus | undefined = (state) => state.user.status;

export const getIsProfiUser: (state: RootReducerState) => boolean | undefined = (state) =>
  state.user.status?.is_pro_plan;

export const getCustomerSlug: (state: RootReducerState) => string | undefined = (state) => state.user.status?.slug;

export const getProfileData: (state: RootReducerState) => null | UserProfileDataObject = (state) =>
  state.user.profileData;

export const getUserProfiPlan: (state: RootReducerState) => 'free' | 'profi' = (state) => state.user.profileData?.plan;
//  TOOD: FIX TS
