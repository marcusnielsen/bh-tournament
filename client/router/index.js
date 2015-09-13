'use strict';

var Router = require('director').Router;

var router = new Router({
  '/': require('./tournaments'),
  '/tournament/:tournamentId': require('./tournament')
});

router.init('/');
