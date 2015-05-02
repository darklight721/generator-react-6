'use strict';

var runGenerator = require('./test-helper.js');
var assert = require('yeoman-generator').assert;

describe('generator-react-6:component', function() {

  describe('with jest', function() {
    describe('with no name', function() {
      before(runGenerator('component', {
        onReady: function(generator) {
          generator.config.set('includeJest', true);
        }
      }));

      it('has default name', function() {
        assert.fileContent([
          ['app/scripts/components/component.js', /Component/],
          ['app/scripts/components/__tests__/component-test.js', /component/],
          ['app/scripts/components/__tests__/component-test.js', /Component/]
        ]);
      });
    });

    describe('with custom name', function() {
      before(runGenerator('component', {
        arguments: ['Test Component'],
        onReady: function(generator) {
          generator.config.set('includeJest', true);
        }
      }));

      it('has custom name', function() {
        assert.fileContent([
          ['app/scripts/components/test-component.js', /TestComponent/],
          ['app/scripts/components/__tests__/test-component-test.js', /test-component/],
          ['app/scripts/components/__tests__/test-component-test.js', /TestComponent/]
        ]);
      });
    });
  });

  describe('with no jest', function() {
    describe('with no name', function() {
      before(runGenerator('component'));

      it('has no test component', function() {
        assert.noFile('app/scripts/components/__tests__/component.js');
      });
    });

    describe('with custom name', function() {
      before(runGenerator('component', { arguments: ['Test Component'] }));

      it('has no test component', function() {
        assert.noFile('app/scripts/components/__tests__/test-component-test.js');
      });
    });
  });

});
