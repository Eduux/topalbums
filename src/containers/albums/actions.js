import api from '~/service/api';

import parseAlbums from './parseAlbums';

export default ({ data, changeState }) => ({
  listAlbums: async () => {
    const { error } = data;

    changeState({ label: 'loading', value: true });

    try {
      const {
        feed: { entry },
      } = await api.get('');

      const parsedList = entry.map(parseAlbums);

      changeState({ label: 'list', value: parsedList });
      changeState({ label: 'listFiltered', value: parsedList });

      if (error) changeState({ label: 'error', value: null });
    } catch (err) {
      changeState({
        label: 'error',
        value: 'An unexpected error has occurred!',
      });
    } finally {
      changeState({ label: 'loading', value: false });
    }
  },

  searchAlbums: (search, type) => {
    changeState({
      label: 'listFiltered',
      value: data.list.filter(album =>
        album[type].toUpperCase().includes(search.toUpperCase()),
      ),
    });
  },
});
