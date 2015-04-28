import React from 'react/addons';
import Home from '../home';

const TestUtils = React.addons.TestUtils;

jest.dontMock('../home.js');

describe('Home', function() {
  let home = null;

  beforeEach(function() {
    home = TestUtils.renderIntoDocument(<Home/>);
  });

  it('contains the word React', function() {
    expect(React.findDOMNode(home).textContent).toContain('React');
  });

  it('has a list of included items', function() {
    const items = TestUtils.scryRenderedDOMComponentsWithTag(home, 'li');
    expect(items.length).toBeGreaterThan(0);
  });
});
