# vorpal-shell
> Vorpal Extension for running shell commands


[![npm](https://img.shields.io/npm/v/vorpal-shell.svg)](https://www.npmjs.com/package/vorpal-shell)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


### About
Vorpal extension that enables you to run **shell** command, right from the vorpal REPL

To do so, start your command with `$`. Some completion is even availabled.
(Hovewer due to a current vorpal caveat, it wont autocomplete your options :confused:)

### Besic Setup
```js
const Vorpal = require('vorpal');
const vorpalShell = require('vorpal-shell');

const vorpal = Vorpal();

vorpal
  .delimiter('>> ')
  .use(vorpalShell({shell: 'zsh'}))
  .show();
```
