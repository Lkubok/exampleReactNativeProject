import { AppliedFilters, FiltersSnapshot, Location } from 'models/types';
import { RootReducerState } from 'store/reducers';

export const getMainCategorySelectedFilterId: (state: RootReducerState) => number | null = (state) =>
  state.filters.mainCategoriesSelectedFilterId;
export const getSubCategorySelectedFilterId: (state: RootReducerState) => number | null = (state) =>
  state.filters.subCategoriesSelectedFiltersId;
export const getLocationSelectedFilters: (state: RootReducerState) => string[] = (state) =>
  state.filters.locationSelectedFilters;
export const getSelectedCountryId: (state: RootReducerState) => number | null = (state) =>
  state.filters.selectedCountryId;
export const getSelectedCityId: (state: RootReducerState) => number | string | null = (state) =>
  state.filters.selectedCityId;
export const getTypedSearchedQueryString: (state: RootReducerState) => string | null = (state) =>
  state.filters.searchedQueryString;
export const getSelectedRange: (state: RootReducerState) => number | null = (state) => state.filters.selectedRange;
export const getPreviousFiltersSnapshot: (state: RootReducerState) => FiltersSnapshot | null = (state) =>
  state.filters.previousFiltersSnapshot;
export const getAppliedFilters: (state: RootReducerState) => AppliedFilters | null = (state) =>
  state.filters.appliedFilters;
export const getSelectedLocation: (state: RootReducerState) => Location | null = (state) =>
  state.filters.selectedLocation;
export const getOnlyProfiOffers: (state: RootReducerState) => boolean = (state) => state.filters.onlyProfiOffers;
