var win = require('nw.gui').Window.get();
var repl = require('./repl');
var bang = require('./bang');
var help = require('./help');

jQuery(function($) {
  var fullCommand = "";
  $('body').terminal(function(command,term) {
    if (command === 'quit') { win.close(true); } 
    if (command === 'help') { return help(term); }
    if (/^!(ls|dir|cp|mv|mkdir|npm)/.test(command)) {
      bang(command, term);
      return;
    }
    fullCommand += '\n' + command;
    if (JSHINT(fullCommand)) {
      repl.run(fullCommand, term);
      fullCommand = "";
    } else {
      // returns true if no unmatched err
      if (repl.errors(JSHINT.errors, term)) {
        fullCommand = "";
      };
    }
  }, {
    prompt: '$> ',
    greetings: ''
  });
});