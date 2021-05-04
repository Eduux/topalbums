/* eslint-disable no-console */
import React, { useEffect } from 'react';

import { useAlbums } from '~/containers/albums';

import Banner from '~/components/Banner';
import ListAlbums from '~/components/ListAlbums';

import './styles.scss';

const Home = () => {
  const {
    data: { list, loading, error },
    actions: { listAlbums },
  } = useAlbums();

  useEffect(() => {
    if (!list.length) listAlbums();
    // eslint-disable-next-line
  }, []);

  return error ? (
    <div>erro</div>
  ) : (
    <div>
      {loading ? (
        <div>carregando</div>
      ) : (
        <div className="homeContainer">
          <Banner />
          <ListAlbums list={list} />
        </div>
      )}
    </div>
  );
};

export default Home;
