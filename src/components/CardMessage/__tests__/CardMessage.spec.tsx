import React from 'react';
import { act, customRender } from 'utils/testUtils';

import CardMessage, { Props } from '../CardMessage';

jest.useFakeTimers();

describe('CardMessage component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let props: Props;
  beforeEach(() => {
    props = {
      item: {
        imageUrl: '',
        message: '',
        name: '',
        productName: '',
        recipientCompanyName: '',
        recipientName: '',
        recipientPhoto: '',
        recipientVerified: true,
        time: '',
        unread: false,
        params: { customer_slug: 'd', offerName: '', offer_slug: '', recipientSlug: '' },
      },
    };
  });

  it('should match snapshot when 1 line', () => {
    const snapshot = customRender(<CardMessage {...props} />).toJSON();
    // eslint-disable-next-line no-void
    void act(() => {
      expect(snapshot).toMatchSnapshot();
    });
  });
});
