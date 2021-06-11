import React from 'react';
import { act, customRender } from 'utils/testUtils';

import TabBarIcon from '../TabBarIcon';

jest.useFakeTimers();

describe('TabBarIcon component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      disabled: true,
      loading: false,
      onPress: () => {},
      title: 'testingTabBarIcon',
      useNativeDriver: true,
    };
  });

  it('should match snapshot', () => {
    const snapshot = customRender(<TabBarIcon {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
