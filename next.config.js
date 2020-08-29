const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
});
