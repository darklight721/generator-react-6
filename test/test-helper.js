'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

var runGenerator = function(name, options) {
  options = options || {};

  return function(done) {
    helpers.run(path.join(__dirname, '../' + name))
      .inDir(path.join(__dirname, './temp'))
      .withPrompt(options.prompt)
      .withArguments(options.arguments || [])
      .on('ready', options.onReady || function() {})
      .on('end', done);
  };
}

module.exports = runGenerator;
