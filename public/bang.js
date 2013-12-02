var spawn = require('child_process').spawn;
var _ = require('underscore');

module.exports = function(command, term) {
  var cmds = command.replace(/^!/, '').split(' ');
  var cmd = _(cmds).first();
  var args = _(cmds).rest();
  spawn(cmd, args).stdout.on('data', term.echo);
}