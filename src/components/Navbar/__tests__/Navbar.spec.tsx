/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import { render } from 'utils';

import Navbar from '../Navbar';

jest.useFakeTimers();

describe('Home screen', () => {
  beforeEach(() => {});

  it('should match snapshot', () => {
    const { toJSON } = render(<Navbar />);
    expect(toJSON()).toMatchSnapshot();
  });
});
