module.exports = {
  extends: 'plugin:@anansi/typescript',
  parserOptions: {
    projectRoot: ['./tsconfig.json'],
    jsx: true,
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  plugins: ['jest'],
  rules: {
    "react/display-name": 0,
    "no-bitwise": 0,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0
  }
}