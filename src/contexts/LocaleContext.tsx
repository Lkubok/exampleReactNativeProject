/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { createContext, useState, useMemo, FunctionComponent } from 'react';
import * as RNLocalize from 'react-native-localize';
import { toLower, first } from 'lodash';

import i18n from 'translations';

export const LocaleContext = createContext({});

export type LocaleContextProps = {
  setLocale: (locale: string) => void;
  locale: string;
  i18n: {
    t: (localizedString: string) => string;
  };
};

export const LocaleProvider: FunctionComponent = ({ children }) => {
  const deviceLocale = toLower(first(RNLocalize.getLocales())?.languageCode);

  const [locale, setLocale] = useState(deviceLocale);
  const localizationValues = useMemo(
    () => ({
      i18n: {
        t: (scope: any, options: any) => i18n.t(scope, { locale, ...options }),
      },
      locale,
      setLocale,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={localizationValues}>{children}</LocaleContext.Provider>;
};
