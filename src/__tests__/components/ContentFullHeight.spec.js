import React from 'react';
import { render } from '@testing-library/react';

import Component from '~/components/ContentFullHeight';

describe('ContentFullHeight component', () => {
  it('should render', () => {
    const result = render(<Component>ContentFullHeight</Component>);
    expect(result).toMatchSnapshot();
  });
});
