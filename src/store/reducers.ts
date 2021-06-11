/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers } from 'redux';
import { reducer as login } from './login';
import { reducer as appParams } from './appParams';
import { reducer as basicData } from './basicData';
import { reducer as filters } from './filters';
import { reducer as user } from './user';
import { reducer as offers } from './offers';
import { reducer as communication } from './communication';
import { reducer as newOffer } from './newOffer';
import { reducer as notificationSettings } from './notificationSettings';
import { reducer as myOffers } from './myOffers';
import { actionTypes } from 'store/login';

export const appReducer = combineReducers({
  login,
  appParams,
  basicData,
  user,
  offers,
  filters,
  communication,
  newOffer,
  notificationSettings,
  myOffers,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === actionTypes.LOG_OUT_USER) {
    // eslint-disable-next-line no-param-reassign
    state = {
      login: undefined,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;

export type RootReducerState = ReturnType<typeof rootReducer>;
