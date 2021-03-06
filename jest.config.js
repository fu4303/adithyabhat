require('dotenv').config()

module.exports = {
  roots: ['<rootDir>'],
  setupFiles: ['./jest.setup.js', 'jest-canvas-mock'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '@/lib/(.*)': '<rootDir>/lib/$1',
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/pages/(.*)': '<rootDir>/pages/$1',
    'graphql/(.*)': '<rootDir>/graphql/$1',
    '@/utils/(.*)': '<rootDir>/utils/$1',
    'hooks/(.*)': '<rootDir>/hooks/$1',
    'lotties/(.*)': '<rootDir>/lotties/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.+(js|ts|tsx)',
    '<rootDir>/components/**/*.+(js|ts|tsx)',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      functions: 80,
      lines: 80,
    },
  },
}
