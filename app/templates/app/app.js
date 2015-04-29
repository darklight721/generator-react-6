import React from 'react';
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

React.render(<Home/>, mountNode);
