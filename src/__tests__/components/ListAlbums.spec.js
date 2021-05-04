import React from 'react';
import {
  render,
  act,
  fireEvent,
  getByRole,
  getByTestId,
} from '@testing-library/react';

import parseAlbums from '~/containers/albums/parseAlbums';

import albumRequest from '~/__mocks__/requests/albumsRequest';

import Component from '~/components/ListAlbums';

describe('ListAlbums component', () => {
  const list = albumRequest.feed.entry.map(parseAlbums);

  it('should render without data', async () => {
    const result = render(<Component list={[]} />);
    expect(result).toMatchSnapshot();
  });

  it('should render with data', async () => {
    const result = render(<Component list={list} />);
    expect(result).toMatchSnapshot();
  });

  it('should render without data and changing the empty list message', async () => {
    const result = render(<Component list={[]} emptyMessage="Teste" />);
    expect(result).toMatchSnapshot();
  });

  it('should render with data and open a album details and close it', async () => {
    const result = render(<Component list={list} />);
    const { container } = result;

    act(() => {
      fireEvent(
        getByRole(container, 'tabpanel'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    act(() => {
      fireEvent(
        getByTestId(container, 'close-icon'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    expect(result).toMatchSnapshot();
  });
});
