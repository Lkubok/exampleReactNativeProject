module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          api: './src/api',
          assets: './src/assets/',
          components: './src/components/',
          contexts: './src/contexts/',
          config: './src/config/',
          hooks: './src/hooks/',
          middlewares: './src/middlewares',
          models: './src/models/',
          navigation: './src/navigation/',
          styles: './src/styles/',
          schemas: './src/schemas',
          screens: './src/navigation/screens/',
          store: './src/store/',
          translations: './src/translations/',
          utils: './src/utils/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
