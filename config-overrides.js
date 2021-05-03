const { resolve } = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': resolve(__dirname, './src/'),
    };

    return config;
  },
  jest(config) {
    config = {
      ...config,
      moduleNameMapper: { '^~\\/(.*)$': '<rootDir>/src/$1' },
      coverageThreshold: {
        global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90,
        },
      },
      collectCoverageFrom: [
        'src/pages/**/*.js',
        'src/components/**/*.js',
        'src/containers/**/*.js',
        'src/services/**/*.js',
      ],
    };

    return config;
  },
};
