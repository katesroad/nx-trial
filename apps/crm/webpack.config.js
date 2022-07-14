const { merge } = require('webpack-merge');
const path = require('path');

module.exports = (config, context) => {
  return merge(config, {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets/'),
        '@components': path.resolve(__dirname, './src/app/components'),
      },
    },
  });
};
