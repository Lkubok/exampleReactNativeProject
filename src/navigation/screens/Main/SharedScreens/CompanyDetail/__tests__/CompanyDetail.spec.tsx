import React from 'react';
import { act, MockedNavigator, originRender } from 'utils/testUtils';

import CompanyDetail from '../CompanyDetail';

jest.useFakeTimers();

describe('CompanyDetail screen', () => {
  beforeEach(() => {});

  it('should match snapshot', () => {
    const snapshot = originRender(<MockedNavigator component={CompanyDetail} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
