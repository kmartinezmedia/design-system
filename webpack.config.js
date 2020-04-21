const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const resolveTsconfigPathsToAlias = require('./scripts/resolveTsconfigPathsToAlias');
const localAliases = resolveTsconfigPathsToAlias();

module.exports = async function (env, argv) {
  try {
    const config = await createExpoWebpackConfigAsync(env, argv);
    // Customize the config before returning it.
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      ...localAliases,
    };
    return config;
  } catch (err) {
    throw new Error(err);
  }
};
