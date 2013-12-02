var vm = require('vm');
var util = require('util');
var prettyjson = require('prettyjson');
var _ = require('underscore');

exports.run = function(command, term) {
  term.echo(
    util.inspect(
      vm.runInThisContext(command)
    )
  );
};

exports.errors = function(errors, term) {
  // if unmatched then no error.
  var unmatched = _(errors).chain()
    .pluck('code')
    .contains('E019')
    .value();
  if (!unmatched) {
    _(errors).each(function(err) {
      term.echo(err.reason);
    });
    return true;
  }
  return false;
};