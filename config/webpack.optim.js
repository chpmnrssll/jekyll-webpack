/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Critters = require('critters-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './config/optimization-fix/do-not-delete.js',
  output: {
    filename: 'optimization-fix-this-file-is-ignored.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new Critters({
      // Outputs: <link rel="preload" onload="this.rel='stylesheet'">
      preload: 'swap',
      // Don't inline critical font-face rules, but preload the font URLs:
      preloadFonts: true,
      pruneSource: false
    })
  ],
};
