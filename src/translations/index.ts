/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import { toLower, first } from 'lodash';

import source from './source';
import en from './assets/en';
import pl from './assets/pl';
import cs from './assets/cs';
import ru from './assets/ru';
import sk from './assets/sk';
import de from './assets/de';

const deviceLocale = toLower(first(RNLocalize.getLocales())?.languageCode);

i18n.translations = {
  source,
  cs,
  en,
  pl,
  de,
  ru,
  sk,
};
i18n.defaultLocale = 'source';
i18n.locale = deviceLocale;
i18n.fallbacks = { source: ['en', 'cs', 'pl', 'de', 'sk', 'ru'] };

export default i18n;

export { en, pl, cs };
