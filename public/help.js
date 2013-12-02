var pkg = require('../package.json');
module.exports = function(term) {
  term.echo('Welcome to Node Console!');
  term.echo('Version: ' + pkg.version);

  term.echo('-----------------------------------------');
  term.echo('HELP')
  term.echo('-----------------------------------------');
  term.echo('REPL');
  term.echo('');
  term.echo('In Node Console, you have full access to');
  term.echo('the nodejs environment.');
  term.echo('try `process.version.toString();`');

  term.echo('-----------------------------------------');
  term.echo('BANG');
  term.echo('');
  term.echo('If you want to exec simple cmds you can ');
  term.echo('add the `!` bang prefix to any command');
  term.echo('and it will spawn to the command-line.');
  term.echo('');
  term.echo('Example:');
  term.echo('');
  term.echo('`!npm version`');

  term.echo('-----------------------------------------');
  term.echo('QUIT');
  term.echo('');
  term.echo('type `quit`');
  
}