'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var fileName = '.env-' + NODE_ENV + '.template';

var fs = require('fs');
fs.createReadStream(fileName)
  .pipe(fs.createWriteStream('.env'));
