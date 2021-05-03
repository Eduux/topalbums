import React from 'react';
import { render } from '@testing-library/react';

import Component from '~/components/Album';

describe('Card component', () => {
  it('should be render.', () => {
    const wrapper = render(<Component />);

    expect(wrapper).toBeTruthy();
  });
});
