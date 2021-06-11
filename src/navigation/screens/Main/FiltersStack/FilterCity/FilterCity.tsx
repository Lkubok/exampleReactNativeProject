/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, useMemo, useCallback, useEffect, useState, useRef } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { find, map } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import debounce from 'debounce-promise';

import { CategoriesPicker, Navbar, Input } from 'components';
import { useGetFindLocation } from 'api/marketplace';
import { useTranslations, useSession } from 'hooks';
import { variables } from 'res';
import { selectors as filterSelectors, actions as filterActions } from 'store/filters';
import { CategoryItemType } from 'models/types';
import IconSearch from 'assets/magnifier2.svg';

import styles from './styles';
import InputSearch from 'components/InputSearch';
import { MaterialIndicator } from 'react-native-indicators';

type Place = {
  city: string;
  country: string;
  default: boolean;
  district: string;
  id: number;
  label: string;
  latitude: number;
  longitude: number;
  postal: string;
  region: string;
};

const FilterCity: FC = () => {
  const { i18n } = useTranslations();
  const selectedCityId = useSelector(filterSelectors.getSelectedCityId);
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const [searchedCity, setSearchedCity] = useState('');
  const selectedCountryId = useSelector(filterSelectors.getSelectedCountryId);
  const [places, setPlaces] = useState<Place[]>([]);
  const { sid } = useSession();

  const { isLoading, runRequest: findLocation } = useGetFindLocation({
    sid,
    successCallback: (data) => {
      setPlaces(data);
    },
  });

  const getLocations = useCallback(debounce(findLocation, 700, { leading: false }), []);

  useEffect(() => {
    if (selectedCountryId) {
      getLocations({ query: searchedCity, country: selectedCountryId }).catch((err) => console.error(err));
    }
  }, [searchedCity, getLocations, selectedCountryId]);

  const cities: CategoryItemType[] = useMemo(
    () =>
      map(places, (city) => {
        return {
          id: city.id,
          name: city.label,
          checked: city.id === selectedCityId,
        };
      }),
    [places, selectedCityId],
  );

  const handleSelectCity = useCallback(
    (id: number | string) => {
      const cityName = find(places, { id }) as Place;
      dispatch(filterActions.setSelectedCityId(id));
      dispatch(filterActions.setLocationFilter(cityName.label));
      dispatch(filterActions.setSelectedLocation({ latitude: cityName.latitude, longitude: cityName.longitude }));
      dispatch(filterActions.setSelectedRange(20));
      goBack();
    },
    [dispatch, goBack, places],
  );

  return (
    <>
      <Navbar
        withLinkBack
        center={i18n.t('navbar_select_city')}
        right={
          isLoading ? (
            <View style={styles.loading}>
              <MaterialIndicator color={variables.colors.accentRed} size={32} />
            </View>
          ) : (
            <></>
          )
        }
        inModal
      />
      <ScrollView style={styles.container}>
        <InputSearch
          placeholder={i18n.t('filters_type_name_of_city')}
          onChangeText={(text) => setSearchedCity(text)}
          style={styles.searchBox}
          value={searchedCity}
          autoFocus
        />
        <CategoriesPicker onPress={handleSelectCity} items={cities} singleSelect />
      </ScrollView>
    </>
  );
};

export default FilterCity;
