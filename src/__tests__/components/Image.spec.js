import React from 'react';
import { render } from '@testing-library/react';

import Component from '~/components/PositionAlbum';

describe('Image component', () => {
  it('should render', async () => {
    const result = render(<Component position={1} />);
    expect(result).toMatchSnapshot();
  });
});
