import React from 'react';
import { act, MockedNavigator, originRender } from 'utils/testUtils';

import FilterMainCategory from '../FilterMainCategory';

jest.useFakeTimers();

describe('FilterMainCategory screen', () => {
  beforeEach(() => {});

  it('should match snapshot', () => {
    const snapshot = originRender(<MockedNavigator component={FilterMainCategory} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
