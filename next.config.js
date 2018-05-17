/* eslint-disable */
const path = require('path');
const glob = require('glob');
const withCSS = require('@zeit/next-css');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = withCSS({
  cssModules: true
});
