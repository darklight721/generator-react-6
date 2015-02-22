jest.dontMock('../<%= _.slugify(componentName) %>.js');

describe('<%= componentName %>', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var <%= componentName %> = require('../<%= _.slugify(componentName) %>.js');


});
