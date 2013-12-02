module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
        version: '0.8.1',
        build_dir: 'builds',
      },
      src: [
        './public/index.html',
        './public/jquery.min.js',
        './public/jquery.terminal.css',
        './public/jquery.terminal-min.js',
        './public/jshint.js',
        './public/underscore-min.js',
        './public/app.js',
        './public/repl.js',
        './public/bang.js',
        './public/help.js',
        './package.json',
        './node_modules/underscore/**/*.js'
      ]
    }
  });
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);
}
