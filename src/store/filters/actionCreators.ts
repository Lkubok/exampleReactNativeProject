import { AppliedFilters, FiltersSnapshot, Location } from 'models/types';
import * as t from './actionTypes';

import { FiltersActionTypes } from './creatorsTypes';

export const setMainCategoriesFilterId = (mainCategoryFilterId: number): FiltersActionTypes => ({
  type: t.SET_MAIN_CATEGORY_FILTER,
  mainCategoryFilterId,
});

export const setOnlyProfiOffer = (onlyProfiOffers: boolean): FiltersActionTypes => ({
  type: t.SET_ONLY_PROFI_OFFERS,
  onlyProfiOffers,
});

export const setCountryId = (selectedCountryId: number | null): FiltersActionTypes => ({
  type: t.SET_COUNTRY_FILTER,
  selectedCountryId,
});
export const saveFiltersStateSnapshot = (filters: FiltersSnapshot): FiltersActionTypes => ({
  type: t.SAVE_FILTERS_STATE_SNAPSHOT,
  filters,
});
export const restoreFiltersStateSnapshot = (filters: FiltersSnapshot | null): FiltersActionTypes => ({
  type: t.RESTORE_FILTERS_STATE_SNAPSHOT,
  filters,
});

export const saveAppliedFilters = (appliedFilters: AppliedFilters): FiltersActionTypes => ({
  type: t.SET_APPLIED_FILTERS,
  appliedFilters,
});

export const setSelectedRange = (selectedRange: number | null): FiltersActionTypes => ({
  type: t.SET_SELECTED_RANGE,
  selectedRange,
});

export const setSelectedLocation = (selectedLocation: Location): FiltersActionTypes => ({
  type: t.SET_SELECTED_LOCATION,
  selectedLocation,
});

export const setSelectedCityId = (selectedCityId: number | string | null): FiltersActionTypes => ({
  type: t.SET_SELECTED_CITY_ID,
  selectedCityId,
});

export const setSubCategoriesFilterId = (subCategoryFilterId: number): FiltersActionTypes => ({
  type: t.SET_SUBCATEGORY_FILTER,
  subCategoryFilterId,
});

export const setLocationFilter = (locationFilter: string): FiltersActionTypes => ({
  type: t.SET_LOCATION_FILTER,
  locationFilter,
});

export const removeMainCategoriesFilterId = (): FiltersActionTypes => ({
  type: t.REMOVE_MAIN_CATEGORY_FILTER,
});

export const removeSubCategoriesFilterId = (subCategoryFilterId: number): FiltersActionTypes => ({
  subCategoryFilterId,
  type: t.REMOVE_SUBCATEGORY_FILTER,
});

export const setSearchedQuerystring = (searchedQueryString: string): FiltersActionTypes => ({
  searchedQueryString,
  type: t.SET_SEARCHED_QUERY_STRING,
});

export const clearSubcategoriesFilters = (): FiltersActionTypes => ({
  type: t.CLEAR_SUBCATEGORIES_FILTERS,
});

export const removeLocationFilter = (): FiltersActionTypes => ({
  type: t.REMOVE_LOCATION_FILTER,
});
