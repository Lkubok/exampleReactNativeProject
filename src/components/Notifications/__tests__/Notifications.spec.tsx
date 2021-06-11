import React from 'react';
import { act, customRender } from 'utils/testUtils';

import Notifications from '../Notifications';

jest.useFakeTimers();

describe('Notifications component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      disabled: true,
      loading: false,
      onPress: () => {},
      title: 'testingNotifications',
      useNativeDriver: true,
    };
  });

  it('should match snapshot', () => {
    const snapshot = customRender(<Notifications {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
