'use strict';

var config = require('../../../config');

function init(router) {
  router.get('/', function onGet(req, res) {
    res.json([
      {
        id: 1,
        name: 'my tournament'
      },
      {
        id: 2,
        name: 'your tournament'
      }
    ]);
  });

  return {
    path: '/tournament',
    router: router
  };
}

module.exports = init;
