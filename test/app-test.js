'use strict';

var runGenerator = require('./test-helper.js');
var assert = require('yeoman-generator').assert;

describe('generator-react-6:app', function() {

  describe('with default options', function() {
    before(runGenerator('app', {
      prompt: { features: ['includeBootstrap', 'includeModernizr', 'includeJest'] },
      arguments: ['skip-install']
    }));

    it('creates expected files', function() {
      assert.file([
        'package.json',
        'gulpfile.js',
        'bower.json',
        '.bowerrc',
        '.editorconfig',
        '.gitignore',
        '.yo-rc.json',
        'app/index.html',
        'app/favicon.ico',
        'app/robots.txt',
        'app/styles/main.scss',
        'app/scripts/app.js',
        'app/scripts/components/home.js'
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
        ['app/styles/main.scss', /bootstrap-sass-official/],
        ['gulpfile.js', /bootstrap-sass-official/]
      ]);
    });

    it('has jest', function() {
      assert.file('app/scripts/components/__tests__/home-test.js');
      assert.fileContent([
        ['package.json', /"babel-jest"/],
        ['package.json', /"gulp-jest"/],
        ['package.json', /"harmonize"/],
        ['gulpfile.js', /'harmonize'/],
        ['gulpfile.js', /'jest'/],
        ['gulpfile.js', /'test'/],
        ['.yo-rc.json', /"includeJest": true/]
      ]);
    });
  });

  describe('with custom project name', function() {
    before(runGenerator('app', {
      prompt: { project: 'Custom Project' },
      arguments: ['skip-install']
    }));

    it('has a custom name', function() {
      assert.fileContent([
        ['package.json', /"name": "custom-project"/],
        ['bower.json', /"name": "custom-project"/],
        ['app/index.html', /<title>Custom Project<\/title>/]
      ]);
    });
  });

  describe('with no options selected', function() {
    before(runGenerator('app', {
      arguments: ['skip-install']
    }));

    it('has no modernizr', function() {
      assert.noFileContent([
        ['bower.json', /"modernizr"/],
        ['app/index.html', /modernizr\.js/]
      ]);
    });

    it('has no bootstrap', function() {
      assert.noFileContent([
        ['bower.json', /"bootstrap-sass-official"/],
        ['app/styles/main.scss', /bootstrap-sass-official/],
        ['gulpfile.js', /bootstrap-sass-official/]
      ]);
    });

    it('has no jest', function() {
      assert.noFile('app/scripts/components/__tests__/home-test.js');
      assert.noFileContent([
        ['package.json', /"babel-jest"/],
        ['package.json', /"gulp-jest"/],
        ['package.json', /"harmonize"/],
        ['gulpfile.js', /'harmonize'/],
        ['gulpfile.js', /'jest'/],
        ['gulpfile.js', /'test'/]
      ]);
      assert.fileContent([
        ['.yo-rc.json', /"includeJest": false/]
      ])
    });
  });

});
