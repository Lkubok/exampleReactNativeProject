export enum AuthFlowScreen {
  CompanyInfo = 'CompanyInfoScreen',
  Login = 'LoginScreen',
  Register = 'RegisterScreen',
  NotificationSetup = 'NotificationSetupScreen',
  ResetPassword = 'ResetPasswordScreen',
  NotificationSubCategories = 'NotificationSubCategoriesScreen',
  SetPasswordCS = 'SetPasswordScreenCS',
  SetPasswordSK = 'SetPasswordScreenSK',
  SetPasswordPL = 'SetPasswordScreenPL',
  SetPasswordDE = 'SetPasswordScreenDE',
  SetPasswordEN = 'SetPasswordScreenEN',
  ChangePasswordCS = 'ChangePasswordScreenCS',
  ChangePasswordSK = 'ChangePasswordScreenSK',
  ChangePasswordPL = 'ChangePasswordScreenPL',
  ChangePasswordDE = 'ChangePasswordScreenDE',
  ChangePasswordEN = 'ChangePasswordScreenEN',
}

export enum MarketPlaceStackScreens {
  MarketPlaceDashboard = 'MarketPlaceDashboard',
  MarketPlaceCompanyDetail = 'MarketPlaceCompanyDetail',
  MarketPlaceCompanyRating = 'MarketPlaceCompanyRating',
  MarketPlaceOfferDetail = 'MarketPlaceOfferDetail',
  MarketPlaceContactInformation = 'MarketPlaceContactInformation',
  MarketPlaceUserBillingInformation = 'MarketPlaceUserBillingInformation',
  MarketPlaceNewsDetail = 'MarketPlaceNewsDetail',
}

export enum ModalFilterStackScreens {
  FilterRoot = 'FilterRoot',
  FiltersSubCategories = 'FiltersSubCategories',
  FiltersMainCategory = 'FiltersMainCategory',
  FiltersCity = 'FiltersCity',
  FiltersRange = 'FiltersRange',
  FiltersCountry = 'FiltersCountry',
}

export enum ModalProfiPlanStackScreens {
  ProfiOffers = 'ProfiOffers',
  ProfiPlans = 'ProfiPlans',
  ProfiMessages = 'ProfiMessages',
}

export enum NewsStackScreens {
  NewsMain = 'NewsMain',
  NewsDetail = 'NewsDetail',
  NewsContactInformation = 'NewsContactInformation',
  NewsCompanyDetail = 'NewsCompanyDetail',
  NewsCompanyRating = 'NewsCompanyRating',
  NewsOfferDetail = 'NewsOfferDetail',
  NewsUserBillingInformation = 'NewsUserBillingInformation',
}

export enum ProfileStackScreens {
  ProfileCompanyDetail = 'ProfileCompanyDetail',
  ProfileCompanyRating = 'ProfileCompanyRating',
  ProfileMain = 'ProfileMain',
  ProfileSettings = 'ProfileSettings',
  ProfileUser = 'ProfileUser',
  ProfileOfferDetail = 'ProfileOfferDetail',
}

export enum AdvisorStackScreens {
  AdvisorMain = 'AdvisorMain',
}

export enum NotificationsSettingsStackScreens {
  NotificationMain = 'NotificationMain',
  NotificationSubCategories = 'NotificationSubCategories',
}

export enum ProfileSettingsStackScreens {
  ProfileBasicInformation = 'ProfileBasicInformation',
  ProfileBillingInformation = 'ProfileBillingInformation',
}

export enum EditOfferStackScreens {
  EditOfferScreen = 'EditOfferScreen',
  EditPhotosScreen = 'EditPhotosScreen',
}

export enum NewOfferStackScreens {
  CreateNewOffer = 'CreateNewOffer',
  CreateNewOfferDescription = 'CreateNewOfferDescription',
  CreateNewOfferContactInformation = 'CreateNewOfferContactInformation',
  CreateNewOfferSuccess = 'CreateNewOfferSuccess',
  CreateNewOfferRegion = 'CreateNewOfferRegion',
  CreateNewOfferWasteCategory = 'CreateNewOfferWasteCategory',
}

const MainFlowScreens = {
  MarketPlaceStack: MarketPlaceStackScreens,
  NewsStack: NewsStackScreens,
  ProfileStack: ProfileStackScreens,
  AdvisorStack: AdvisorStackScreens,
  ModalProfiPlanStack: ModalProfiPlanStackScreens,
  ModalFilterStack: ModalFilterStackScreens,
  NewOfferStack: NewOfferStackScreens,
  NotificationsSettingsStack: NotificationsSettingsStackScreens,
  ProfileSettingsStack: ProfileSettingsStackScreens,
  ModalEditOfferStack: EditOfferStackScreens,
};

export enum MainStackNames {
  MarketPlaceStack = 'MarketPlaceStack',
  NewsStack = 'NewsStack',
  ProfileStack = 'ProfileStack',
  AdvisorStack = 'AdvisorStack',
  ModalNewOfferStack = 'ModalNewOfferStack',
  ModalProfiPlanStack = 'ModalProfiPlanStack',
  ModalFilterStack = 'ModalFilterStack',
  MainTabsStack = 'MainTabsStack',
  ModalNotificationsSettingsStack = 'NotificationsSettingsStack',
  ModalProfileSettingsStack = 'ProfileSettingsStack',
  ModalEditOfferStack = 'ModalEditOfferStack',
}

const screenNames = {
  AuthFlow: AuthFlowScreen,
  MainFlow: MainFlowScreens,
  MainStackNames: MainStackNames,
};

export default screenNames;
