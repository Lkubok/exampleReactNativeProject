import React from 'react';
import { act, customRender } from 'utils/testUtils';

import ProductCard from '../ProductCard';

jest.useFakeTimers();

describe('ProductCard component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      autoCapitalize: 'words',
      blocked: false,
      error: 'testError',
      initialFocus: true,
      isPasswordField: true,
      keyboardType: 'number-pad',
      label: 'test label',
      onBlur: () => {},
      onChange: () => {},
      onChangeText: () => {},
      onFocus: () => {},
      onSubmitEditing: () => {},
      placeholder: 'test placeholder',
      secureTextEntry: true,
      shakeCounter: 5,
      useNativeDriver: true,
      value: 'test value',
    };
  });

  xit('should match snapshot when 1 line', () => {
    const snapshot = customRender(<ProductCard {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });

  xit('should match snapshot when multiline', () => {
    const snapshot = customRender(<ProductCard {...props} multiline />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
