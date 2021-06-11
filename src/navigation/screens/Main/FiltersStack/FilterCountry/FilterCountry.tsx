import React, { FC, useMemo, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { map } from 'lodash';
import { useNavigation } from '@react-navigation/native';

import { CategoriesPicker, Navbar } from 'components';
import { useTranslations } from 'hooks';
import { selectors as filterSelectors, actions as filterActions } from 'store/filters';
import { selectors as basicDataSelectors } from 'store/basicData';
import { CategoryItemType } from 'models/types';

import styles from './styles';

const FilterCountry: FC = () => {
  const { i18n } = useTranslations();
  const countriesData = useSelector(basicDataSelectors.getCountryCodes);
  const selectedCountryId = useSelector(filterSelectors.getSelectedCountryId);
  const dispatch = useDispatch();
  const { goBack } = useNavigation();

  const countries: CategoryItemType[] = useMemo(
    () =>
      map(countriesData, (country) => {
        return {
          id: country.id,
          name: country.name,
          checked: country.id === selectedCountryId,
        };
      }),
    [countriesData, selectedCountryId],
  );

  const handleSelectCountry = useCallback(
    (id: number | string) => {
      dispatch(filterActions.setCountryId(+id));
      dispatch(filterActions.setSelectedCityId(null));
      dispatch(filterActions.removeLocationFilter());
      dispatch(filterActions.setSelectedRange(null));
      goBack();
    },
    [dispatch, goBack],
  );

  return (
    <>
      <Navbar withLinkBack center={i18n.t('navbar_select_country')} inModal />
      <ScrollView style={styles.container}>
        <CategoriesPicker onPress={handleSelectCountry} items={countries} singleSelect />
      </ScrollView>
    </>
  );
};

export default FilterCountry;
