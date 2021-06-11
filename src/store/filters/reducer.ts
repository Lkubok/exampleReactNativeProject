import * as t from './actionTypes';
import { FiltersState, FiltersActionTypes } from './creatorsTypes';

export const initialValues: FiltersState = {
  locationSelectedFilters: [],
  mainCategoriesSelectedFilterId: null,
  subCategoriesSelectedFiltersId: null,
  selectedCountryId: null,
  selectedCityId: null,
  selectedRange: null,
  selectedLocation: null,
  appliedFilters: null,
  previousFiltersSnapshot: null,
  onlyProfiOffers: false,
  searchedQueryString: null,
};

const filtersReducer = (state = initialValues, action: FiltersActionTypes): FiltersState => {
  switch (action.type) {
    case t.SET_LOCATION_FILTER:
      return { ...state, locationSelectedFilters: [action.locationFilter] };
    case t.SET_MAIN_CATEGORY_FILTER:
      return {
        ...state,
        mainCategoriesSelectedFilterId: action.mainCategoryFilterId,
      };
    case t.SET_SUBCATEGORY_FILTER:
      return {
        ...state,
        subCategoriesSelectedFiltersId: action.subCategoryFilterId,
      };
    case t.REMOVE_LOCATION_FILTER:
      return { ...state, locationSelectedFilters: [] };
    case t.REMOVE_MAIN_CATEGORY_FILTER:
      return { ...state, mainCategoriesSelectedFilterId: null };
    case t.REMOVE_SUBCATEGORY_FILTER:
      return {
        ...state,
        subCategoriesSelectedFiltersId: null,
      };
    case t.CLEAR_SUBCATEGORIES_FILTERS:
      return { ...state, subCategoriesSelectedFiltersId: null };
    case t.SET_ONLY_PROFI_OFFERS:
      return { ...state, onlyProfiOffers: action.onlyProfiOffers };
    case t.SET_COUNTRY_FILTER:
      return { ...state, selectedCountryId: action.selectedCountryId };
    case t.SET_SELECTED_CITY_ID:
      return { ...state, selectedCityId: action.selectedCityId };
    case t.SET_SELECTED_RANGE:
      return { ...state, selectedRange: action.selectedRange };
    case t.SET_SELECTED_LOCATION:
      return { ...state, selectedLocation: action.selectedLocation };
    case t.SET_SEARCHED_QUERY_STRING:
      return { ...state, searchedQueryString: action.searchedQueryString };
    case t.SET_APPLIED_FILTERS:
      return { ...state, appliedFilters: action.appliedFilters };
    case t.SAVE_FILTERS_STATE_SNAPSHOT:
      return { ...state, previousFiltersSnapshot: action.filters };
    case t.RESTORE_FILTERS_STATE_SNAPSHOT:
      return {
        ...state,
        locationSelectedFilters: action?.filters?.selectedLocationFilters ?? [],
        selectedCityId: action?.filters?.selectedCountryId ?? null,
        selectedCountryId: action?.filters?.selectedCountryId ?? null,
        selectedRange: action?.filters?.selectedRange ?? null,
        subCategoriesSelectedFiltersId: action?.filters?.selectedSubCategoryId ?? null,
        mainCategoriesSelectedFilterId: action?.filters?.selectedMainCategoryId ?? null,
        onlyProfiOffers: action?.filters?.onlyProfiOffers ?? false,
        searchedQueryString: action.filters?.searchedQueryString ?? null,
      };
    default:
      return state;
  }
};

export default filtersReducer;
