import React from 'react/addons';
import <%= _.classify(componentName) %> from '../<%= _.slugify(componentName) %>';

const TestUtils = React.addons.TestUtils;

jest.dontMock('../<%= _.slugify(componentName) %>.js');

describe('<%= _.classify(componentName) %>', function() {

});
