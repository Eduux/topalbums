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

      changeState({ label: 'list', value: entry.map(parseAlbums) });

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

  setSearch: search => {
    changeState({ label: 'search', value: search });
  },
});
