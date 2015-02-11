var React = window.React = require('react'),
    mountNode = document.getElementById('app');

var App = React.createClass({
  getInitialState() {
    return {
      items: [
        'Browserify',
        '6to5'<% if (includeBootstrap) { %>,
        'Bootstrap'<% } if (includeModernizr) { %>,
        'Modernizr'<% } if (includeJest) { %>,
        'Jest'<% } %>
      ]
    };
  },

  renderItem(item) {
    return <li>item</li>;
  },

  render() {
    return (
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <p>This is a React component.<br/>
           You now also have:</p>
        <ul>{this.state.items.map(this.renderItem)}</ul>
      </div>
    );
  }
});

React.render(<App/>, mountNode);
