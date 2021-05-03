import api from '~/service/api';

export default ({ data, changeState }) => ({
  listAlbums: async () => {
    const { error } = data;

    changeState({ label: 'loading', value: true });

    try {
      const { entry } = await api.get('');

      changeState({ label: 'list', value: entry });

      if (error) changeState({ label: 'error', value: null });
    } catch (err) {
      changeState({ label: 'error', value: 'Ocorreu um erro inesperado!' });
    } finally {
      changeState({ label: 'loading', value: false });
    }
  },

  setSearch: search => {
    changeState({ label: 'search', value: search });
  },
});
