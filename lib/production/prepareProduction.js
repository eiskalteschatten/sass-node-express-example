'use strict';

const cssConfig = require('../../config/css');
const compileSass = require('../compileSass');

module.exports = () => {
  cssConfig.sassFilesToCompile.forEach(sassFile => {
    compileSass.compileSassProduction(sassFile).then(cssFile => {
      console.log(`Created ${cssFile}`);
    }).catch(console.error);
  });
};
