module.exports = Object.assign({
  automock: false,
  coveragePathIgnorePatterns: [
    'index.js',
    'styles.js',
    'themes.js',
    'testUtils.js',
    './*/*Styles.js',
    './*/*config.js',
    'src/translations/*',
  ],
  globals: {
    navigator: {},
    window: {},
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svgMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js', './jest/setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  snapshotSerializers: ['react-native-jest-serializer'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|react-native-flipper|@react-native|redux-flipper|@react-navigation/.*)',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
});
