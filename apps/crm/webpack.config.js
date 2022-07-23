const { merge } = require('webpack-merge');
const path = require('path');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js')

module.exports = (config, context) => {
  nrwlConfig(config)

  return merge(config, {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets/'),
        '@components': path.resolve(__dirname, './src/app/components'),
        '@global': path.join(__dirname, "../libs/styles/src")
      },
    },
  });
};
