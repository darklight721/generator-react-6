'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('generator-react-6', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, './temp'))
      .withPrompt({ features: ['includeBootstrap', 'includeModernizr', 'includeJest'] })
      .withArguments(['skip-install'])
      .on('end', done);
  });

  it('creates expected files', function() {
    assert.file([
      'package.json',
      'gulpfile.js',
      'bower.json',
      '.bowerrc',
      '.editorconfig',
      '.gitignore',
      'app/index.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/styles/main.scss',
      'app/scripts/app.js',
      'app/scripts/views/home.js'
    ]);
  });

  it('has a default name', function() {
    assert.fileContent([
      ['package.json', /"name": "temp"/],
      ['bower.json', /"name": "temp"/],
      ['app/index.html', /<title>temp<\/title>/]
    ]);
  });

  it('has modernizr', function() {
    assert.fileContent([
      ['bower.json', /"modernizr"/],
      ['app/index.html', /modernizr\.js/]
    ]);
  });

  it('has bootstrap', function() {
    assert.fileContent([
      ['bower.json', /"bootstrap-sass-official"/],
      ['app/styles/main.scss', /bootstrap-sass-official/]
    ]);
  });

  it('has jest', function() {
    assert.file('app/scripts/views/__tests__/home-test.js');
    assert.fileContent([
      ['package.json', /"gulp-jest"/],
      ['gulpfile.js', /'jest'/]
    ]);
  });

});
