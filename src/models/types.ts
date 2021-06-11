import { FindLocationResponseItem } from 'api/marketplace/responseTypes';

export type Price = {
  original: boolean;
  amount: number;
  currency: string;
  precision: number;
};

export type PaymentRecord = {
  label: string;
  price: Price[];
  start: string;
  end: string;
  created: string;
  invoice_id: 1;
  invoice_url: string;
};

export type FinancialStatement = {
  name: string;
  mime_type: string;
  size: number;
  page_type: string;
  extension: string;
};

export type FileObject = {
  name: string;
  mime_type: string;
  size: number;
  page_type: string;
  extension: string;
};

export type MessageObject = {
  id: number;
  created: string;
  name: string;
  text: string;
  from_seller: boolean;
  customer_slug: string;
  customer_name: string;
  customer_profile_photo: ProfilePhoto;
  customer_verified_partner: boolean;
  customer_fullname: string;
  attachments: FileObject[];
  score?: number;
  reaction?: string;
};

export type ProcessPhotoFile = {
  name: string;
  mime_type: string;
  size: number;
  page_type: string;
  extension: string;
};

export type ProfilePhoto = {
  urls: {
    al: string;
    as: string;
    am: string;
    original: string;
  };
  is_placeholder: boolean;
};

export type ProductImage = {
  urls: {
    small: string;
    large: string;
  };
  is_placeholder: boolean;
};

export type ImageItem = {
  urls: {
    as: string;
    am: string;
    al: string;
    original: string;
  };
  is_placeholder: boolean;
};

export type Address = {
  first_name: string;
  last_name: string;
  street: string;
  street_number: number;
  orientation_number: string;
  city: string;
  postal: string;
  country: number;
  note: string;
};

export type ShippingAddress = Address;

export type InvoicingAddress = Address;

export type CompanyData = {
  name?: string;
  registration_id?: string;
  vat_id?: string;
  description?: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  telephone?: number;
  phone_prefix?: string;
  email?: string;
  website?: string;
  street?: string;
  street_number?: number;
  orientation_number?: string;
  city?: string;
  postal?: string;
  invoicing_registration_id?: string;
  customer_country?: string;
};

export type UserProfileDataObject = {
  aggregate_rating: number;
  aggregate_rating_count: number;
  email?: string;
  phone_prefix_id?: number;
  phone?: string;
  company?: CompanyData;
  invoicing_address?: InvoicingAddress;
  shipping_address?: ShippingAddress;
  slug?: string;
  description?: string;
  website?: string;
  plan?: string;
  plan_billing?: string;
  is_pro_plan?: boolean;
  profi_plan_active_until?: string;
  profi_plan_auto_renewal?: boolean;
  verified_partner?: boolean;
  has_files_for_verification?: boolean;
  customer_country_id?: number;
  profile_photo?: ProfilePhoto;
  payment_records?: PaymentRecord[];
  financial_statement_file?: FinancialStatement;
  waste_manipulation_license_files?: FileObject[];
  process_photo_files?: ProcessPhotoFile[];
  newsletter?: string[];
  score?: number;
  score_messages?: string[];
};

export enum ResponseStatus {
  success = 'success',
  error = 'error',
}

export type GenericMessage = {
  status: ResponseStatus;
  text: string;
  text_dev: string;
};

export type TokenData = {
  value: string;
  expires: string;
};

export type Currency = {
  code: string;
  symbol: string;
  active: boolean;
};

export type Unit = {
  code: string;
  symbol: string;
  active: boolean;
};

export type Locale = {
  label: string;
  code: string;
  active: boolean;
};

export type PhonePrefix = {
  id: number;
  name: string;
  prefix: string;
};

export type Translation = {
  key: string;
  value: string;
};

export type SubCategoryItem = {
  id: number;
  image: string;
  name: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subcategories: any[];
  system_name: string;
};

export type CategoryItem = {
  id: number;
  image: string;
  item_count: number;
  name: string;
  slug: string;
  subcategories: SubCategoryItem[];
  system_name: string;
};

export type FontSizes = 'min' | 'small' | 'base' | 'medium' | 'big' | 'large' | 'xLarge';

export type CountryCode = {
  code: string;
  has_locations: boolean;
  id: number;
  name: string;
};

export type Module = {
  enabled: boolean;
  name: string;
};

export type PlanPrice = {
  amount: number;
  currency: string;
  original: boolean;
  precision: number;
};

export type Slug = {
  name: string;
  slug: string;
};

export type SessionSettings = {
  basic_scan_price: PlanPrice;
  clear_translations_cache: boolean;
  currencies: Currency[];
  description: string;
  google_maps_api_key: string;
  gtm_id: string;
  gdpr_pages: {
    agreement: Slug;
    info: Slug;
  };
  how_it_works_page: Slug;
  is_vat_payer: boolean;
  locales: Locale[];
  max_product_image_cnt: number;
  modules: Module[];
  monthly_plan_monthly_price: PlanPrice;
  name: string;
  order_popup_login: boolean;
  popup_login: boolean;
  profi_offer_count: number;
  quarterly_plan_monthly_price: PlanPrice;
  referer_cookie_lifetime_in_days: number;
  smartform_client_id: string;
  switched_off: boolean;
  temporary_page: Slug;
  terms_page: Slug;
  title: string;
  total_offer_count: number;
  units: Unit[];
  yearly_plan_monthly_price: PlanPrice;
};

export type UserStatusData = {
  logged: boolean;
  slug: string;
  language: string;
  token: {
    value: string;
    expires: string;
  };
  message: {
    status: string;
    text: string;
  };
};

export type UserStatus = {
  logged: boolean;
  email: string;
  first_name: string;
  last_name: string;
  slug: string;
  phone_prefix: string;
  phone_prefix_id: number;
  customer_country: string;
  customer_country_id: number;
  phone: string;
  company: string;
  is_pro_plan: boolean;
  is_allowed_to_contact: boolean;
  verified_partner: boolean;
  used_contact_forms: number;
  contact_form_limit: number;
  id: number;
  unread_conversations: number;
  can_enhance_profile: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profile_photo?: any;
};

export type UserConversationsData = {
  scoring_status: string;
  messages: [
    {
      id: number;
      created: string;
      name: string;
      text: string;
      from_seller: boolean;
      customer_slug: string;
      customer_name: string;
      customer_profile_photo: ProfilePhoto;
      attachments: FileObject[];
      score?: number;
      reaction: string;
    },
  ];
};

export type OfferPriceObject = {
  amount: number;
  currency: string;
  precision: number;
};

export type Offer = {
  user_id: number;
  name: string;
  slug: string;
  perex: string;
  description: string;
  price: OfferPriceObject;
  price_no_vat: OfferPriceObject;
  price_converted: OfferPriceObject;
  price_no_vat_converted: OfferPriceObject;
  currency: string;
  product_code: string;
  ean: string;
  manufacturer: string;
  main_image: ProfilePhoto;
  images: ProfilePhoto[];
  uploaded_images: ProfilePhoto[];
  category_system_name: string;
  subcategory_system_name: string;
  published: boolean;
  location: string;
  city: string;
  postal: string;
  district: string;
  region: string;
  country: string;
  latitude: string;
  longitude: string;
  quantity: number;
  unit: {
    id: number;
    label: string;
  };
  shipping_available: boolean;
  pricing_type: string;
  sold: boolean;
  displayed: boolean;
  expiration_date: string;
  expire: boolean;
  customer: {
    slug: string;
    label: string;
    verified_partner: boolean;
    profile_photo: ProfilePhoto;
  };
};

export type SelectedNotificationCategory = {
  categoryID: number;
  selectedSubCategoriesIDs: number[];
  selectedSubCategoriesNames: string[];
};

export type CategoryItemType = {
  id: number | string;
  name: string;
  checked?: boolean;
};

export type Location = {
  longitude: number;
  latitude: number;
};

export type AppliedFilters = {
  country: string | undefined;
  profi: boolean | undefined;
  category: string | undefined;
  longitude: number | undefined;
  latitude: number | undefined;
  radius: number | undefined;
  q: string | undefined;
};

export type FiltersSnapshot = {
  onlyProfiOffers: boolean;
  selectedMainCategoryId: number | null;
  selectedSubCategoryId: number | null;
  selectedCountryId: number | null;
  selectedLocationFilters: string[];
  selectedRange: number | null;
  selectedLocationCoords: Location | null;
  searchedQueryString: string | undefined;
};
export type Thread = {
  thread_slug: string;
  messages: MessageObject[];
};

export type OfferPreviewBreadcrumbsResponse = {
  name: string;
  slug: string;
};

export type OfferPreviewParametersValues = {
  system_name_id: string;
  value: string;
  hex_code: string;
};

export type OfferPreviewParametersResponse = {
  id: number;
  name: string;
  unit: string;
  is_color: boolean;
  values: OfferPreviewParametersValues[];
};

export type OfferSelectionGroupsValuesResponse = {
  label: string;
  system_name_id: string;
  selected: boolean;
  disabled: boolean;
};

export type OfferSelectionGroupsResponse = {
  name: string;
  values: OfferSelectionGroupsValuesResponse[];
};

export type ProductListItem = {
  user_id: number;
  name: string;
  name_translated: string;
  slug: string;
  perex: string;
  description: string;
  description_translated: string;
  price: OfferPriceObject;
  price_no_vat: OfferPriceObject;
  price_converted: OfferPriceObject;
  price_no_vat_converted: OfferPriceObject;
  currency: string;
  product_code: string;
  ean: string;
  manufacturer: string;
  main_image: ProfilePhoto;
  images: ProfilePhoto[];
  uploaded_images: ProfilePhoto[];
  category_system_name: string;
  subcategory_system_name: string;
  published: boolean;
  location: string;
  city: string;
  postal: string;
  district: string;
  region: string;
  country: string;
  latitude: string;
  longitude: string;
  quantity: number;
  unit: {
    label: string;
  };
  shipping_available: boolean;
  pricing_type: string;
  sold: boolean;
  displayed: boolean;
  expiration_date: string;
  expire: boolean;
  customer: {
    slug: string;
    label: string;
    verified_partner: boolean;
    profile_photo: ProfilePhoto;
    fullname: string;
  };
};

export type OfferDetail = {
  user_id: number;
  name: string;
  name_translated: string;
  slug: string;
  perex: string;
  perex_translated: string;
  description: string;
  price: OfferPriceObject;
  price_no_vat: OfferPriceObject;
  price_converted: OfferPriceObject;
  price_no_vat_converted: OfferPriceObject;
  currency: string;
  product_code: string;
  ean: string;
  manufacturer: string;
  main_image: ProfilePhoto;
  images: ProfilePhoto[];
  uploaded_images: ProfilePhoto[];
  category_system_name: string;
  subcategory_system_name: string;
  published: boolean;
  location: string;
  city: string;
  postal: string;
  district: string;
  region: string;
  country: string;
  latitude: string;
  longitude: string;
  quantity: number;
  unit: {
    id: number;
    label: string;
  };
  shipping_available: boolean;
  pricing_type: string;
  sold: boolean;
  displayed: boolean;
  expiration_date: string;
  expire: boolean;
  seller_name: string;
  customer: {
    slug: string;
    label: string;
    verified_partner: boolean;
    profile_photo: {
      name: string;
      urls: {
        al: string;
        am: string;
        as: string;
        original: string;
      };
      is_placeholder: boolean;
    };
  };
  parameters: OfferPreviewParametersResponse[];
  breadcrumbs: OfferPreviewBreadcrumbsResponse[];
  files: FileObject[];
  related_products: ProductListItem[];
  translations: Record<string, unknown>;
  seller_email: string;
  seller_phone: string;
  seller_phone_prefix: string;
  seller_phone_prefix_id: number;
  parameter_selection: {
    query_string: string;
    selection_groups: OfferSelectionGroupsResponse[];
    seller_email: string;
    seller_name: string;
    seller_phone_prefix_id: number;
    seller_phone: string;
    waste_category_id: number;
    waste_category_name: string;
    waste_category_code: string;
    messages: MessageObject[];
  };
  waste_category_id?: number;
  waste_category_name?: string;
  waste_category_code?: string;
  product_type: ProductType[];
};

export type ProductMessage = {
  id: number;
  created: string;
  name: string;
  text: string;
  from_seller: boolean;
  customer_name: string;
  customer_slug: string;
  customer_profile_photo: ImageItem;
  customer_fullname: string;
  customer_verified_partner: boolean;
  attachments: FileObject[];
  score: number;
  reaction: string;
};

export type ProductMessageThread = {
  last_message: ProductMessage;
  offer: ProductListItem;
  unread: boolean;
  scoring_status: string;
};

export type BillingType = 'monthly' | 'quarterly' | 'yearly';

export type NewsDetailScreenParams = {
  offer_slug: string;
  customer_slug: string;
  didComeFromMarketing?: boolean;
  recipientName: string;
  recipientPhoto: string;
  recipientCompanyName: string;
  recipientVerified: boolean;
  recipientSlug: string;
  offerName: string;
};

export type OfferScore = 1 | 2 | 3 | 4 | 5;

export type ScoringStatus = 'allowed' | 'suggested' | 'disallowed';

export type ProductType = 'waste' | 'byproduct' | 'recycled' | 'tech';

export type NewOffer = {
  category: number | null;
  subcategory: number | null;
  location: FindLocationResponseItem | null;
};

export type Rating = {
  id: number;
  created: string;
  name: string;
  text: string;
  from_seller: boolean;
  customer_slug: string;
  customer_name: string;
  customer_profile_photo: {
    urls: {
      as: string;
      am: string;
      al: string;
      original: string;
    };
  };
  attachments: FileObject[];
  score: number;
  reaction: string;
  customer: {
    slug: string;
    label: string;
    verified_partner: boolean;
    profile_photo: {
      urls: {
        as: string;
        am: string;
        al: string;
        original: string;
      };
    };
  };
};

export type NotificationType =
  | 'new_message'
  | 'scoring_user_can_evaluate'
  | 'scoring_user_was_evaluated'
  | 'new_offers_in_marketplace'
  | null;

export type ThreadParams = {
  customerSlug: string;
  offerSlug: string;
};
