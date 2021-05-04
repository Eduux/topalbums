import React from 'react';
import { render } from '@testing-library/react';

import Component from '~/components/Header';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
  NavLink: ({ children }) => children,
}));

describe('Header component', () => {
  it('should render', () => {
    const result = render(<Component />);
    expect(result).toMatchSnapshot();
  });
});
