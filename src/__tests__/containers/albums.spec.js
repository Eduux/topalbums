/* eslint-disable max-lines */
import React from 'react';
import { render } from '@testing-library/react';
import AxiosMockAdapter from 'axios-mock-adapter';

import api from '~/service/api';

import parseAlbums from '~/containers/albums/parseAlbums';

import albumsRequest from '~/__mocks__/requests/albumsRequest';

import withContainer, { initialState } from '~/containers/albums';
import actions from '~/containers/albums/actions';

const serviceMock = new AxiosMockAdapter(api);

describe('albums container', () => {
  it('should be render with Component.', () => {
    const MockComponent = () => <p>mock</p>;

    const MakeContainerWrapper = withContainer(MockComponent);
    const { getByText } = render(<MakeContainerWrapper />);

    expect(getByText('mock')).toBeTruthy();
  });

  describe('#actions', () => {
    describe('listAlbums', () => {
      it('should be search albums with success', async () => {
        const changeStateMock = jest.fn();

        serviceMock.onGet(`/`).reply(200, albumsRequest);

        const actionsMock = actions({
          data: { ...initialState },
          changeState: changeStateMock,
        });

        await actionsMock.listAlbums();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: albumsRequest.feed.entry.map(parseAlbums),
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(3);
      });

      it('should be search albums with not found albumns', async () => {
        const changeStateMock = jest.fn();

        serviceMock
          .onGet(`/`)
          .reply(200, { feed: { ...albumsRequest.feed, entry: [] } });

        const actionsMock = actions({
          data: { ...initialState },
          changeState: changeStateMock,
        });

        await actionsMock.listAlbums();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: [],
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(3);
      });

      it('should be search albums with error', async () => {
        const changeStateMock = jest.fn();

        serviceMock.onGet(`/`).reply(500);

        const actionsMock = actions({
          data: { ...initialState },
          changeState: changeStateMock,
        });

        await actionsMock.listAlbums();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'error',
          value: 'An unexpected error has occurred!',
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(3);
      });

      it('must search for albums with error in the data, request successfully', async () => {
        const changeStateMock = jest.fn();

        serviceMock.onGet(`/`).reply(200, albumsRequest);

        const actionsMock = actions({
          data: { ...initialState, error: 'Teste' },
          changeState: changeStateMock,
        });

        await actionsMock.listAlbums();

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: true,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'list',
          value: albumsRequest.feed.entry.map(parseAlbums),
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'error',
          value: null,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(4);
      });
    });

    describe('setSearch', () => {
      it('should be set search text', async () => {
        const changeStateMock = jest.fn();

        const actionsMock = actions({
          data: initialState,
          changeState: changeStateMock,
        });

        const textSearch = 'Test';

        await actionsMock.setSearch(textSearch);

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'search',
          value: textSearch,
        });

        expect(changeStateMock.mock.calls.length).toBe(1);
      });
    });
  });
});
