import React from 'react';
import { act, customRender } from 'utils/testUtils';

import NotificationHandler from '../NotificationHandler';

jest.useFakeTimers();

describe('NotificationHandler component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      disabled: true,
      loading: false,
      onPress: () => {},
      title: 'testingNotificationHandler',
      useNativeDriver: true,
    };
  });

  it('should match snapshot', () => {
    const snapshot = customRender(<NotificationHandler {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
