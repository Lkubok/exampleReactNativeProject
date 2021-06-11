import { StyleProp, TextStyle } from 'react-native';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface TextProps {
    bigger?: StyleProp<TextStyle>;
    basic?: StyleProp<TextStyle>;
    small?: StyleProp<TextStyle>;
  }

  export interface Colors {
    lang_selector_active: string;
    lang_selector_inactive: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
    Text: Partial<TextProps>;
  }
}
