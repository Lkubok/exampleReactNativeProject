import React from 'react';
import { act, customRender } from 'utils/testUtils';

import Button from '../Button';

jest.useFakeTimers();

describe('Button component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      disabled: true,
      loading: false,
      onPress: () => {},
      title: 'testingButton',
      useNativeDriver: true,
    };
  });

  it('should match snapshot', () => {
    const snapshot = customRender(<Button {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
