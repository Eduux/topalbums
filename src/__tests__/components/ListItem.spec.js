import React from 'react';
import { render, fireEvent, getByTestId, act } from '@testing-library/react';

import parseAlbums from '~/containers/albums/parseAlbums';

import albumRequest from '~/__mocks__/requests/albumsRequest';

import Component from '~/components/ListAlbums/partials/ListItem';

import withFavorites, { initialState } from '~/containers/favorites';

describe('ListItem component', () => {
  const mockAlbum = { ...albumRequest.feed.entry.map(parseAlbums)[0] };

  it('should render', async () => {
    const Container = withFavorites(
      Component.bind(null, { album: mockAlbum, index: 1 }),
    );

    const result = render(<Container />);
    expect(result).toMatchSnapshot();
  });

  it('must be clicked on the favorite button', () => {
    const Container = withFavorites(
      Component.bind(null, { album: mockAlbum, index: 1 }),
      initialState,
    );

    const result = render(<Container />);
    const { container } = result;

    act(() => {
      fireEvent(
        getByTestId(container, 'favorite-icon'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    expect(result).toMatchSnapshot();
  });

  it('must be clicked on the unfavorite button', () => {
    const Container = withFavorites(
      Component.bind(null, { album: mockAlbum, index: 1 }),
      {
        list: [mockAlbum],
      },
    );

    const result = render(<Container />);
    const { container } = result;

    act(() => {
      fireEvent(
        getByTestId(container, 'favorite-icon'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    expect(result).toMatchSnapshot();
  });
});
