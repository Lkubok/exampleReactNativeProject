import * as t from './actionTypes';
import { UserActions, UserDataState } from './creatorsTypes';

export const initialValues: UserDataState = {
  userData: undefined,
  userStatusData: undefined,
  userThreadListData: undefined,
  status: undefined,
  profileData: null,
};

const userReducer = (state = initialValues, action: UserActions): UserDataState => {
  switch (action.type) {
    case t.SET_USER_DATA:
      return { ...state, userData: action.userData };
    case t.SET_USER_STATUS_DATA:
      return { ...state, userStatusData: action.userStatusData };
    case t.SET_STATUS:
      return { ...state, status: action.status };
    case t.SET_THREAD_LIST_DATA:
      return { ...state, userThreadListData: action.threads };
    case t.UPDATE_THREAD_LIST:
      return { ...state, userThreadListData: action.threads };
    case t.SET_PROFILE_DATA:
      return { ...state, profileData: action.profileData };
    default:
      return state;
  }
};

export default userReducer;
