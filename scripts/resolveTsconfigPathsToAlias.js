const { resolve } = require('path');

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias() {
  const { paths } = require(resolve(
    __dirname,
    '../tsconfig.json',
  )).compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = resolve(
      __dirname,
      '../src',
      paths[item][0].replace('/*', '').replace('*', ''),
    );

    aliases[key] = value;
  });

  return aliases;
}

module.exports = resolveTsconfigPathsToAlias;
