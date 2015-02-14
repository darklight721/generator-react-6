var React = window.React = require('react'),
    Home = require('./views/home'),
    mountNode = document.getElementById('app');

React.render(<Home/>, mountNode);
