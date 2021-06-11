import React from 'react';
import { act, MockedNavigator, originRender } from 'utils/testUtils';

import CompanyRating from '../CompanyRating';

jest.useFakeTimers();

describe('CompanyRating screen', () => {
  beforeEach(() => {});

  it('should match snapshot', () => {
    const snapshot = originRender(<MockedNavigator component={CompanyRating} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
