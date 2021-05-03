import * as storage from '~/helpers/storage';

const keyStorage = 'favorites';

export default ({ data: { list }, changeState }) => ({
  setFavorite: movie => {
    const newMovies = [movie, ...list];
    changeState({ label: 'list', value: newMovies });

    storage.setItem(keyStorage, newMovies);
  },
  removeFavorite: idMovie => {
    const newMovies = list.filter(({ imdbID }) => imdbID !== idMovie);
    changeState({ label: 'list', value: newMovies });

    storage.setItem(keyStorage, newMovies);
  },
  loadFavorites: () => {
    const favorites = storage.getItem(keyStorage) || [];
    changeState({ label: 'list', value: favorites });
  },
});
