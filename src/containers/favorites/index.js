import React, {
  useState,
  useCallback,
  useContext,
  memo,
  useEffect,
} from 'react';

import changeState from '~/helpers/changeState';
import actions from './actions';

export const initialState = {
  list: [],
};

export const FavoritesContext = React.createContext({
  data: initialState,
  actions: actions({ data: initialState, changeState: changeState(() => {}) }),
});

export const useFavorites = () => useContext(FavoritesContext);

export default function withFavoritesProvider(
  WrappedComponent,
  state = initialState,
) {
  const WithFavorites = props => {
    const [data, setData] = useState(state);

    const value = useCallback(
      () => ({
        data,
        actions: actions({ data, changeState: changeState(setData) }),
      }),
      [data],
    );

    useEffect(() => {
      value().actions.loadFavorites();
      // eslint-disable-next-line
    }, []);

    return (
      <FavoritesContext.Provider value={value()}>
        <WrappedComponent {...props} />
      </FavoritesContext.Provider>
    );
  };

  return memo(WithFavorites);
}
