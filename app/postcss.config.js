const webpack = require('webpack');
const path = require('path');

module.exports = {
  parser: 'postcss-scss',
    plugins: [
      require('postcss-advanced-variables'),
      require('postcss-nested'),
      require('postcss-nesting'),
      require('postcss-extend'),
      require('postcss-flexbugs-fixes'),
      require('autoprefixer')({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 11', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ]
};
