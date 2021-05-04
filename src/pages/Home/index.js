import React, { useEffect } from 'react';

import { useAlbums } from '~/containers/albums';

import Banner from '~/components/Banner';
import Loader from '~/components/Loader';
import ListAlbums from '~/components/ListAlbums';
import ErrorMessage from '~/components/ErrorMessage';

import './styles.scss';

const Home = () => {
  const {
    data: { listFiltered, loading, error },
    actions: { listAlbums },
  } = useAlbums();

  useEffect(() => {
    if (!listFiltered.length) listAlbums();
    // eslint-disable-next-line
  }, []);

  return error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="homeContainer">
          <Banner title="TopTop 100 Albums Itunes" />
          <ListAlbums list={listFiltered} />
        </div>
      )}
    </>
  );
};

export default Home;
