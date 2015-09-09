'use strict';

// TODO: Should the file ever be loaded when not in development?
// Yes, but not if an ENV like maybe INIT_LOCAL_DOT_ENV=disabled.
require('dotenv').load();

// TODO: Find best practice.
// Should we duplicate the .env variables or leak all envs into config like we do now?
// Leaking should be OK for local dev mode.
var config = process.env;

module.exports = config;
