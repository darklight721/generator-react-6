jest.dontMock('../home.js');

describe('Home', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Home = require('../home.js');
  var home = null;

  beforeEach(function() {
    home = TestUtils.renderIntoDocument(<Home/>);
  });

  it('contains the word React', function() {
    expect(home.getDOMNode().textContent).toContain('React');
  });

  it('has a list of included items', function() {
    var items = TestUtils.scryRenderedDOMComponentsWithTag(home, 'li');
    expect(items.length).toBeGreaterThan(0);
  });
});
