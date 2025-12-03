module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/.internal/**',
    '!**/node_modules/**',
    '!**/__tests__/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.internal/',
    '/__tests__/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.internal/',
  ],
};

