import * as storage from '~/helpers/storage';

const keyStorage = 'favorites';

export default ({ data: { list }, changeState }) => ({
  setFavorite: album => {
    const newAlbumns = [album, ...list];
    changeState({ label: 'list', value: newAlbumns });

    storage.setItem(keyStorage, newAlbumns);
  },
  removeFavorite: idAlbum => {
    const newAlbumns = list.filter(
      ({ id: { attributes } }) => attributes['im:id'] !== idAlbum,
    );
    changeState({ label: 'list', value: newAlbumns });

    storage.setItem(keyStorage, newAlbumns);
  },
  loadFavorites: () => {
    const favorites = storage.getItem(keyStorage) || [];
    changeState({ label: 'list', value: favorites });
  },
});
