var config = require('./webpack.config');

var entries = config.entry;
entries.push('webpack/hot/dev-server');
// The script refreshing the browser on none hot updates
entries.push('webpack-dev-server/client?http://localhost:8080');

console.log(entries);

module.exports = config;
