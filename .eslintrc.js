module.exports = {
  extends: 'plugin:@anansi/typescript',
  parserOptions: {
    project: ['./tsconfig.json'],
    jsx: true,
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  plugins: ['jest']
}