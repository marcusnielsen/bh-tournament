'use strict';

require('./styles/main.scss');
require('./router');

require('../common/intents/create-tournament').createTournament({id: 42, name: 'Test'});
