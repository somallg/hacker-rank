module.exports = {
  bail: true,
  collectCoverage: false,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '^.+\\.spec\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@challenges/(.*)$': '<rootDir>/$1'
  },
  rootDir: './packages',
  testPathIgnorePatterns: ['/node_modules/', '/schematics/challenges/'],
  verbose: true
};
