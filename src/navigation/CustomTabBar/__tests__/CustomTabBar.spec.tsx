import React from 'react';
import { act, customRender } from 'utils/testUtils';

import CustomTabBar from '../CustomTabBar';

jest.useFakeTimers();

describe('CustomTabBar component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      disabled: true,
      loading: false,
      onPress: () => {},
      title: 'testingCustomTabBar',
      useNativeDriver: true,
    };
  });

  xit('should match snapshot', () => {
    const snapshot = customRender(<CustomTabBar {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
