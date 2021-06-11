import screenNames, { MainStackNames } from './screenNames';
import Navigation from './Navigation';
import { AuthStackParamList } from './navigators/Auth/Auth';
import { MainStackParamList } from './navigators/Main/Main';

import {
  AdvisorStackParamsList,
  MarketPlaceStackParamList,
  NewsStackParamList,
  ProfileStackParamList,
  FilterStackParamList,
  NewOfferStackParamsList,
  ProfiPlanStackParamList,
} from './navigators/Main/Stacks';

export { screenNames };
export type {
  AuthStackParamList,
  MainStackParamList,
  AdvisorStackParamsList,
  MarketPlaceStackParamList,
  NewsStackParamList,
  ProfileStackParamList,
  MainStackNames,
  FilterStackParamList,
  NewOfferStackParamsList,
  ProfiPlanStackParamList,
};

export default Navigation;
