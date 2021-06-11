import React from 'react';
import { act, customRender } from 'utils/testUtils';

import InputPhone from '../InputPhone';

jest.useFakeTimers();

describe('InputPhone component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: any;
  beforeEach(() => {
    props = {
      prefixItems: [{ value: 'a', label: 'b' }],
    };
  });

  it('should match snapshot when 1 line', () => {
    const snapshot = customRender(<InputPhone {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
