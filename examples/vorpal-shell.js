const Vorpal = require('vorpal');
const vorpalShell = require('../src');

const vorpal = Vorpal();

vorpal
  .delimiter('>> ')
  .use(vorpalShell())
  .show();
