import { AppliedFilters, FiltersSnapshot, Location } from 'models/types';
import * as actionTypes from './actionTypes';

const {
  REMOVE_LOCATION_FILTER,
  REMOVE_MAIN_CATEGORY_FILTER,
  REMOVE_SUBCATEGORY_FILTER,
  SET_LOCATION_FILTER,
  SET_MAIN_CATEGORY_FILTER,
  SET_SUBCATEGORY_FILTER,
  CLEAR_SUBCATEGORIES_FILTERS,
  SET_COUNTRY_FILTER,
  SET_SELECTED_CITY_ID,
  SET_SELECTED_RANGE,
  SET_SELECTED_LOCATION,
  SET_APPLIED_FILTERS,
  RESTORE_FILTERS_STATE_SNAPSHOT,
  SAVE_FILTERS_STATE_SNAPSHOT,
  SET_ONLY_PROFI_OFFERS,
  SET_SEARCHED_QUERY_STRING,
} = actionTypes;

export interface FiltersState {
  mainCategoriesSelectedFilterId: number | null;
  selectedCountryId: number | null;
  selectedCityId: number | string | null;
  subCategoriesSelectedFiltersId: number | null;
  locationSelectedFilters: string[];
  searchedQueryString: string | null;
  selectedRange: number | null;
  selectedLocation: Location | null;
  appliedFilters: AppliedFilters | null;
  previousFiltersSnapshot: FiltersSnapshot | null;
  onlyProfiOffers: boolean;
}

export interface SetOnlyProfiOffer {
  type: typeof SET_ONLY_PROFI_OFFERS;
  onlyProfiOffers: boolean;
}
export interface SaveFiltersStateSnapshot {
  type: typeof SAVE_FILTERS_STATE_SNAPSHOT;
  filters: FiltersSnapshot;
}
export interface RestoreFiltersStateSnapshot {
  type: typeof RESTORE_FILTERS_STATE_SNAPSHOT;
  filters: FiltersSnapshot | null;
}
export interface SetLocationFilter {
  type: typeof SET_LOCATION_FILTER;
  locationFilter: string;
}
export interface SetAppliedFilters {
  type: typeof SET_APPLIED_FILTERS;
  appliedFilters: AppliedFilters;
}
export interface SetSelectedLocation {
  type: typeof SET_SELECTED_LOCATION;
  selectedLocation: Location | null;
}
export interface SetRange {
  type: typeof SET_SELECTED_RANGE;
  selectedRange: number | null;
}

export interface SetMainCategoriesFilter {
  type: typeof SET_MAIN_CATEGORY_FILTER;
  mainCategoryFilterId: number;
}

export interface SetCountryFilter {
  type: typeof SET_COUNTRY_FILTER;
  selectedCountryId: number | null;
}
export interface SetCityFilter {
  type: typeof SET_SELECTED_CITY_ID;
  selectedCityId: string | number | null;
}

export interface SetSubCategoriesFilter {
  subCategoryFilterId: number;
  type: typeof SET_SUBCATEGORY_FILTER;
}

export interface RemoveLocationFilter {
  type: typeof REMOVE_LOCATION_FILTER;
}

export interface RemoveMainCategoryFilter {
  type: typeof REMOVE_MAIN_CATEGORY_FILTER;
}

export interface RemoveSubCategoryFilter {
  subCategoryFilterId: number;
  type: typeof REMOVE_SUBCATEGORY_FILTER;
}
export interface SetSearchedQueryString {
  searchedQueryString: string;
  type: typeof SET_SEARCHED_QUERY_STRING;
}
export interface ClearSubCategoryFilters {
  type: typeof CLEAR_SUBCATEGORIES_FILTERS;
}

export type FiltersActionTypes =
  | SetLocationFilter
  | SetMainCategoriesFilter
  | SetSubCategoriesFilter
  | RemoveLocationFilter
  | RemoveMainCategoryFilter
  | ClearSubCategoryFilters
  | RemoveSubCategoryFilter
  | SetCountryFilter
  | SetCityFilter
  | SetRange
  | SetSelectedLocation
  | SetAppliedFilters
  | RestoreFiltersStateSnapshot
  | SaveFiltersStateSnapshot
  | SetOnlyProfiOffer
  | SetSearchedQueryString;
