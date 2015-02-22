jest.dontMock('../<%= _.slugify(componentName) %>.js');

describe('<%= _.classify(componentName) %>', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var <%= _.classify(componentName) %> = require('../<%= _.slugify(componentName) %>.js');


});
