import React from 'react';
import { render } from '@testing-library/react';

import Favorites from '~/pages/Favorites';

import withFavorites, { initialState } from '~/containers/favorites';

describe('Favorites page', () => {
  it('should render without data', () => {
    const Container = withFavorites(Favorites, initialState);

    const result = render(<Container />);

    expect(result).toMatchSnapshot();
  });
});
