import * as t from './actionTypes';
import { UserProfileDataObject, UserStatusData, UserStatus, ProductMessageThread } from 'models/types';

import { UserActions } from './creatorsTypes';

export const setUserData = (userData: UserProfileDataObject): UserActions => ({
  type: t.SET_USER_DATA,
  userData,
});

export const setUserStatusData = (userStatusData: UserStatusData): UserActions => ({
  type: t.SET_USER_STATUS_DATA,
  userStatusData,
});

export const setStatus = (status: UserStatus): UserActions => ({
  type: t.SET_STATUS,
  status,
});

export const setThreadList = (threads: ProductMessageThread[]): UserActions => ({
  type: t.SET_THREAD_LIST_DATA,
  threads,
});

export const updateThreadList = (threads: ProductMessageThread[]): UserActions => ({
  type: t.UPDATE_THREAD_LIST,
  threads,
});

export const setProfileData = (profileData: UserProfileDataObject): UserActions => ({
  type: t.SET_PROFILE_DATA,
  profileData,
});
