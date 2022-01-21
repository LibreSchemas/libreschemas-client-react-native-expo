module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "react-native-dotenv",
      "safe": true
    }],
    'react-native-reanimated/plugin'
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel',
                'react-native-reanimated/plugin',
               ],
    },
  },
};
