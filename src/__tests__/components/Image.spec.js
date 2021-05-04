import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import Component from '~/components/Image';

describe('Image component', () => {
  it('should render', async () => {
    const result = render(<Component src="a" alt="a" />);
    expect(result).toMatchSnapshot();
  });

  it('should render with error', async () => {
    const result = render(<Component src="a" alt="a" />);
    const img = result.container.querySelector('img');

    act(() => {
      fireEvent(img, new Event('error'));
    });

    expect(result).toMatchSnapshot();
  });
});
