'use strict';

require('./styles/main.scss');
require('./router');

require('../common/intents/tournament/create-tournament').createTournament({id: 42, name: 'Test'});
