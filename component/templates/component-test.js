jest.dontMock('../<%= _.slugify(componentName) %>');

const React = require('react/addons');
const <%= _.classify(componentName) %> = require('../<%= _.slugify(componentName) %>');
const TestUtils = React.addons.TestUtils;

describe('<%= _.classify(componentName) %>', function() {

});
