module.exports = {
  bail: true,
  collectCoverage: false,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@challenges/(.*)$': '<rootDir>/$1'
  },
  rootDir: './challenges',
  verbose: true
};
