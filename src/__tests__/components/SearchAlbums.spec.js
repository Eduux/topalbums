import React from 'react';
import {
  render,
  fireEvent,
  getByPlaceholderText,
  getByText,
  act,
} from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';

import api from '~/service/api';

import withAlbums from '~/containers/albums';

import albumsRequest from '~/__mocks__/requests/albumsRequest';
import Component from '~/components/Header/partials/SearchAlbums';

const serviceMock = new AxiosMockAdapter(api);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: jest.fn() }),
}));

describe('SearchInput component', () => {
  serviceMock.onGet('/').reply(200, albumsRequest);

  it('should render with data and change search text and submit search', () => {
    const Container = withAlbums(Component);

    const result = render(<Container />);
    const { container } = result;

    const input = getByPlaceholderText(container, 'Search for best album...');

    act(() => {
      fireEvent.change(input, { target: { value: 'Fortitude' } });
      fireEvent.submit(input);
    });

    expect(input.value).toBe('Fortitude');
    expect(result).toMatchSnapshot();
  });

  it('should render with data and change option type', () => {
    const Container = withAlbums(Component);

    const result = render(<Container />);
    const { container } = result;

    const input = getByPlaceholderText(container, 'Search for best album...');
    const optionAlbum = getByText(container, 'Album');
    const optionArtirst = getByText(container, 'Artist');

    act(() => {
      fireEvent.change(input, { target: { value: 'Gojira' } });
      fireEvent.click(optionAlbum);
      fireEvent.click(optionArtirst);
      fireEvent.submit(input);
    });

    expect(input.value).toBe('Gojira');
    expect(result).toMatchSnapshot();
  });
});
