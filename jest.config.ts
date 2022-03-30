export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.protocols.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/main/**',
    '!**/test/**',
    '!**/protocols/**',
    '!**/domain/**',
  ],
  roots: ['<rootDir>/tests'],
  testEnvironment: 'jest-environment-node',
};
