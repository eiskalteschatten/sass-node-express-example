'use strict';

const express = require('express');
const router = express.Router();

const path = require('path');
const compileSass = require('../lib/compileSass');

router.get('/main.css', async (req, res) => {
  const cssName = req.url.replace(/\.css/, '').substr(1);  // Get the name of the SASS file from the .css file name in the URL
  const sassFile = path.join(__dirname, '../public/scss/', cssName + '.scss');

  try {
    const css = await compileSass.compileSass(sassFile);
    res.contentType('text/css');
    res.send(css);
  }
  catch(error) {
    res.status(500).send(error);
  }
});

module.exports = router;
