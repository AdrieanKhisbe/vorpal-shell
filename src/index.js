const shelljs = require('shelljs');

module.exports = (options = {}) => vorpal => {
  const {shell = 'bash'} = options;

  vorpal.command('$ [cmd...]', 'run command in a shell terminal')
    .autocomplete({
      data: async () => {
        const command = vorpal.ui.input();
        const shellComp = shelljs.exec(`~/git/vorpal-shell/capture.zsh '${command.substring(2)}'`,
          {shell: 'zsh', silent: true})
        return shellComp.stdout.split(/\r?\n/)
          .map(line => line.split(' ')[0]);
      }
    })
    .allowUnknownOptions()
    .action(async function (args) {
      const cmd = vorpal._command.command.substring(2);
      shelljs.exec(cmd, {shell});
    })
};