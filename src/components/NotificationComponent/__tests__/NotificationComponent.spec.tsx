import React from 'react';
import { act, customRender } from 'utils/testUtils';

import NotificationComponent from '../NotificationComponent';

jest.useFakeTimers();

describe('NotificationComponent component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      disabled: true,
      loading: false,
      onPress: () => {},
      title: 'testingNotificationComponent',
      useNativeDriver: true,
    };
  });

  it('should match snapshot', () => {
    const snapshot = customRender(<NotificationComponent {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
