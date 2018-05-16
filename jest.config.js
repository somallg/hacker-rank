module.exports = {
  bail: true,
  collectCoverage: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@challenges/(.*)$': '<rootDir>/challenges/$1'
  },
  verbose: true
};
