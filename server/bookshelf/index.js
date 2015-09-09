'use strict';

var dbConfig = require('../config/db-config');
var knex = require('knex')(dbConfig);

module.exports = require('bookshelf')(knex);
