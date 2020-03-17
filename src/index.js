const path = require('path');
const shelljs = require('shelljs');

const completionScriptPath = path.join(__dirname, 'capture-completion.zsh');

module.exports = (options = {}) => vorpal => {
  const {shell = 'bash'} = options;

  vorpal
    .command('$ [cmd...]', 'run command in a shell terminal')
    .autocomplete({
      data: async () => {
        const command = vorpal.ui.input();
        const shellComp = shelljs.exec(`${completionScriptPath} '${command.substring(2)}'`, {
          shell: 'zsh',
          silent: true
        });
        const res = shellComp.stdout
          .trim()
          .split(/\r?\n/)
          .map(line => line.split(' ')[0]);
        return res;
      }
    })
    .allowUnknownOptions()
    .action(async function() {
      // note: not using args that is injected by action
      const cmd = vorpal._command.command.substring(2);
      shelljs.exec(cmd, {shell});
    });
};
