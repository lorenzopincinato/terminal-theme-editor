const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withImages(
  withCSS({
    esModule: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    webpack: (config) => {
      config.node = {
        fs: 'empty'
      }

      return config
    }
  })
)
