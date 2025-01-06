module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@features': './src/features',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@service': './src/service',
          '@state': './src/state',
          '@style': './src/style',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
