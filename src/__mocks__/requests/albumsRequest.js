export default {
  feed: {
    author: {
      name: {
        label: 'iTunes Store',
      },
      uri: {
        label: 'http://www.apple.com/itunes/',
      },
    },
    entry: [
      {
        'im:name': {
          label: 'The Essential Johnny Cash',
        },
        'im:image': [
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Music3/v4/2a/e0/cf/2ae0cf36-6b4b-261a-7153-55a93d59df5b/dj.yjweejkt.jpg/55x55bb.png',
            attributes: {
              height: '55',
            },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2a/e0/cf/2ae0cf36-6b4b-261a-7153-55a93d59df5b/dj.yjweejkt.jpg/60x60bb.png',
            attributes: {
              height: '60',
            },
          },
          {
            label:
              'https://is2-ssl.mzstatic.com/image/thumb/Music3/v4/2a/e0/cf/2ae0cf36-6b4b-261a-7153-55a93d59df5b/dj.yjweejkt.jpg/170x170bb.png',
            attributes: {
              height: '170',
            },
          },
        ],
        'im:itemCount': {
          label: '36',
        },
        'im:price': {
          label: '$14.99',
          attributes: {
            amount: '14.99000',
            currency: 'USD',
          },
        },
        'im:contentType': {
          'im:contentType': {
            attributes: {
              term: 'Album',
              label: 'Album',
            },
          },
          attributes: {
            term: 'Music',
            label: 'Music',
          },
        },
        rights: {
          label: '℗ This compilation (P) 2002 Sony Music Entertainment',
        },
        title: {
          label: 'The Essential Johnny Cash - Johnny Cash',
        },
        link: {
          attributes: {
            rel: 'alternate',
            type: 'text/html',
            href:
              'https://music.apple.com/us/album/the-essential-johnny-cash/251001680?uo=2',
          },
        },
        id: {
          label:
            'https://music.apple.com/us/album/the-essential-johnny-cash/251001680?uo=2',
          attributes: {
            'im:id': '251001680',
          },
        },
        'im:artist': {
          label: 'Johnny Cash',
          attributes: {
            href: 'https://music.apple.com/us/artist/johnny-cash/70936?uo=2',
          },
        },
        category: {
          attributes: {
            'im:id': '6',
            term: 'Country',
            scheme: 'https://music.apple.com/us/genre/music-country/id6?uo=2',
            label: 'Country',
          },
        },
        'im:releaseDate': {
          label: '2002-02-12T00:00:00-07:00',
          attributes: {
            label: 'February 12, 2002',
          },
        },
      },
    ],
    updated: {
      label: '2021-05-03T12:37:38-07:00',
    },
    rights: {
      label: 'Copyright 2008 Apple Inc.',
    },
    title: {
      label: 'iTunes Store: Top Albums',
    },
    icon: {
      label: 'http://itunes.apple.com/favicon.ico',
    },
    link: [
      {
        attributes: {
          rel: 'alternate',
          type: 'text/html',
          href:
            'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=11',
        },
      },
      {
        attributes: {
          rel: 'self',
          href:
            'https://mzstoreservices-int.dslb.apple.com/us/rss/topalbums/limit=100/json',
        },
      },
    ],
    id: {
      label:
        'https://mzstoreservices-int.dslb.apple.com/us/rss/topalbums/limit=100/json',
    },
  },
};
