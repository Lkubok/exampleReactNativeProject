import * as actionTypes from './actionTypes';

import { UserProfileDataObject, UserStatusData, UserStatus, ProductMessageThread } from 'models/types';

const {
  SET_USER_DATA,
  SET_USER_STATUS_DATA,
  SET_STATUS,
  SET_THREAD_LIST_DATA,
  UPDATE_THREAD_LIST,
  SET_PROFILE_DATA,
} = actionTypes;

export interface UserDataState {
  userData?: UserProfileDataObject;
  userThreadListData?: ProductMessageThread[];
  userStatusData?: UserStatusData;
  status?: UserStatus;
  profileData: null | UserProfileDataObject;
}

export interface SetUserData {
  type: typeof SET_USER_DATA;
  userData: UserProfileDataObject;
}
export interface SetUserStatusData {
  type: typeof SET_USER_STATUS_DATA;
  userStatusData: UserStatusData;
}

export interface SetStatus {
  type: typeof SET_STATUS;
  status: UserStatus;
}

export interface SetMessageThreadData {
  type: typeof SET_THREAD_LIST_DATA;
  threads: ProductMessageThread[];
}
export interface UpdateMessageThreadData {
  type: typeof UPDATE_THREAD_LIST;
  threads: ProductMessageThread[];
}
export interface SetProfileData {
  type: typeof SET_PROFILE_DATA;
  profileData: UserProfileDataObject;
}

export type UserActions =
  | SetUserData
  | SetUserStatusData
  | SetStatus
  | SetMessageThreadData
  | UpdateMessageThreadData
  | SetProfileData;
