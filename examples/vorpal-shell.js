const Vorpal = require('vorpal');
const vorpalShell = require('../lib');

const vorpal = Vorpal();

vorpal
  .delimiter('>> ')
  .use(vorpalShell())
  .show();
