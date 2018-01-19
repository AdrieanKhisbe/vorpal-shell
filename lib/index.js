const shell = require('shelljs');

module.exports = (options = {}) => vorpal => {
  const {} = options;

  vorpal.command('$ [cmd...]', 'run command in a shell terminal')
    .allowUnknownOptions()
    .action(async function (args) {
      shell.exec(vorpal._command.command.substring(2));
    })
};
