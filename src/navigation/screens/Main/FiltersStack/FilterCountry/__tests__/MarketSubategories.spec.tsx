import React from 'react';
import { act, MockedNavigator, originRender } from 'utils/testUtils';

import FilterCountry from '../FilterCountry';

jest.useFakeTimers();

describe('FilterCountry screen', () => {
  beforeEach(() => {});

  it('should match snapshot', () => {
    const snapshot = originRender(<MockedNavigator component={FilterCountry} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
