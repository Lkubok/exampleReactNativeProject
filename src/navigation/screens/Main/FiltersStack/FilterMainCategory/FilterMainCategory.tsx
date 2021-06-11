import React, { FC, useMemo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { map } from 'lodash';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { CategoriesPicker, Navbar } from 'components';
import { useTranslations } from 'hooks';
import { selectors as filterSelectors, actions as filterActions } from 'store/filters';
import { actions as newOfferActions, selectors as newOfferSelector } from 'store/newOffer';
import { selectors as basicDataSelectors } from 'store/basicData';
import { CategoryItemType } from 'models/types';
import { FilterStackParamList, screenNames } from 'navigation';

import styles from './styles';

const FilterMainCategory: FC = () => {
  const { i18n } = useTranslations();
  const mainSelectedCategoryId = useSelector(filterSelectors.getMainCategorySelectedFilterId);
  const newOfferMainSelectedCategoryId = useSelector(newOfferSelector.getNewOfferCategoryId);
  const availableMainCategories = useSelector(basicDataSelectors.getCategoriesList);
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const { params } = useRoute<
    RouteProp<FilterStackParamList, typeof screenNames.MainFlow.ModalFilterStack.FiltersMainCategory>
  >();

  const mainAvailableFilters: CategoryItemType[] = useMemo(
    () =>
      map(availableMainCategories, (category) => {
        const selectedCategoryId =
          params?.mode === 'newOffer' ? newOfferMainSelectedCategoryId : mainSelectedCategoryId;
        return {
          id: category.id,
          name: category.name,
          checked: selectedCategoryId === category.id,
        };
      }),
    [availableMainCategories, mainSelectedCategoryId, newOfferMainSelectedCategoryId, params?.mode],
  );

  const handleMainCategorySelect = useCallback(
    (id: number | string) => {
      if (typeof id === 'number') {
        if (params?.mode === 'marketDashboard') {
          dispatch(filterActions.setMainCategoriesFilterId(id));
          dispatch(filterActions.clearSubcategoriesFilters());
        }
        if (params?.mode === 'newOffer') {
          dispatch(newOfferActions.setMainCategoryID(id));
          dispatch(newOfferActions.clearSubcategory());
        }
        goBack();
      }
    },
    [dispatch, goBack, params.mode],
  );

  return (
    <>
      <Navbar withLinkBack center={i18n.t('navbar_main_category')} inModal />
      <ScrollView style={styles.container}>
        <CategoriesPicker onPress={handleMainCategorySelect} items={mainAvailableFilters} singleSelect />
      </ScrollView>
    </>
  );
};

export default FilterMainCategory;
