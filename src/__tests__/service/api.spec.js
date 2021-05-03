import AxiosMockAdapter from 'axios-mock-adapter';

import api from '~/service/api';

const serviceMock = new AxiosMockAdapter(api);

describe('Api service', () => {
  it('should be return api instance', () => {
    expect(api instanceof Function).toBe(true);
  });

  it('should be make get in test service success', async () => {
    serviceMock.onGet('/').reply(200, { success: true });

    const request = await api.get('/');

    expect(request).toMatchObject({ success: true });
  });

  it('should be make get in test service error 500', async () => {
    serviceMock.onGet('/error').reply(500);

    try {
      await api.get('/error');
    } catch (err) {
      expect(err.status).toBe(500);
    }
  });
});
