import React from 'react';
import { render } from '@testing-library/react';

import Home from '~/pages/Home';

import parseAlbums from '~/containers/albums/parseAlbums';

import albumRequest from '~/__mocks__/requests/albumsRequest';

import withAlbums, { initialState } from '~/containers/albums';

describe('Home page', () => {
  it('should render without data', () => {
    const Container = withAlbums(Home, initialState);

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must render with error', () => {
    const Container = withAlbums(Home, {
      ...initialState,
      error: 'An unexpected error has occurred!',
    });

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must render with data', () => {
    const Container = withAlbums(Home, {
      ...initialState,
      listFiltered: albumRequest.feed.entry.map(parseAlbums),
    });

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must render with loading', () => {
    const Container = withAlbums(Home, {
      ...initialState,
      loading: true,
    });

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });
});
