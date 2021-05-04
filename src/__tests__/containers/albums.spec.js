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

const albumsFiltered = albumsRequest.feed.entry.map(parseAlbums);

describe('albums container', () => {
  it('should be render with Component.', () => {
    const MockComponent = () => <p>mock</p>;

    const MakeContainerWrapper = withContainer(MockComponent);
    const { getByText } = render(<MakeContainerWrapper />);

    expect(getByText('mock')).toBeTruthy();
  });

  describe('#actions', () => {
    describe('listAlbums', () => {
      it('should be list albums with success', async () => {
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
          value: albumsFiltered,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'listFiltered',
          value: albumsFiltered,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(4);
      });

      it('should be list albums with not found albums', async () => {
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
          label: 'listFiltered',
          value: [],
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(4);
      });

      it('should be list albums with error', async () => {
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

      it('must list albums with error in the data, request successfully', async () => {
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
          value: albumsFiltered,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'listFiltered',
          value: albumsFiltered,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'error',
          value: null,
        });
        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'loading',
          value: false,
        });

        expect(changeStateMock.mock.calls.length).toBe(5);
      });
    });

    describe('searchAlbums', () => {
      it('must search albums by string', () => {
        const changeStateMock = jest.fn();

        const actionsMock = actions({
          data: { ...initialState, list: albumsFiltered },
          changeState: changeStateMock,
        });

        actionsMock.searchAlbums('The Essential Johnny Cash');

        expect(changeStateMock).toHaveBeenCalledWith({
          label: 'listFiltered',
          value: [albumsFiltered[0]],
        });
      });
    });
  });
});
