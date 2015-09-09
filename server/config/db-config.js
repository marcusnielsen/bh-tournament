'use strict';

var config = require('../config');

var dbConfig = {
  client: 'pg',
  connection: {
    host: config.HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    charset: 'utf8'
  }
};

module.exports = dbConfig;
