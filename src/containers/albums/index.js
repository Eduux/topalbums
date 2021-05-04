import React, { useState, useCallback, useContext, memo } from 'react';

import changeState from 'helpers/changeState';
import actions from './actions';

export const initialState = {
  loading: false,
  error: null,
  list: [],
  listFiltered: [],
  search: '',
};

export const AlbumsContext = React.createContext({
  data: initialState,
  actions: actions({ data: initialState, changeState: changeState(() => {}) }),
});

export const useAlbums = () => useContext(AlbumsContext);

export default function withAlbumsProvider(
  WrappedComponent,
  state = initialState,
) {
  const WithAlbums = props => {
    const [data, setData] = useState(state);

    const value = useCallback(
      () => ({
        data,
        actions: actions({ data, changeState: changeState(setData) }),
      }),
      [data],
    );

    return (
      <AlbumsContext.Provider value={value()}>
        <WrappedComponent {...props} />
      </AlbumsContext.Provider>
    );
  };

  return memo(WithAlbums);
}
