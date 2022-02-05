export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: './coverage',
  modulePathIgnorePatterns: ['<rootDir>/out/', '<rootDir>/__tests__/helper']
};
