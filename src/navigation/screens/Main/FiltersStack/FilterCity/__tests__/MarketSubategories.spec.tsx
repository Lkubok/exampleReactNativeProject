import React from 'react';
import { act, MockedNavigator, originRender } from 'utils/testUtils';

import FilterCity from '../FilterCity';

jest.useFakeTimers();

describe('FilterCity screen', () => {
  beforeEach(() => {});

  it('should match snapshot', () => {
    const snapshot = originRender(<MockedNavigator component={FilterCity} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
