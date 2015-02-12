/** @jsx React.DOM */

jest.dontMock('../app.js');

describe('App', function() {
  var React = require('react/addons');
  var App = require('../app.js');
  var TestUtils = React.addons.TestUtils;
  var app = null;

  beforeEach(function() {
    app = TestUtils.renderIntoDocument(<App/>);
  });

  it('contains the word React', function() {
    expect(app.getDOMNode().textContent).toContain('React');
  });

  it('has a list of included items', function() {
    var items = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    expect(items.length).toBeGreaterThan(0);
  });
});
