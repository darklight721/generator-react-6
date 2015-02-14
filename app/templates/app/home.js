var React = require('react');

var Home = React.createClass({
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

  render() {
    return (
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <p>This is a React component.<br/>
           You now also have:</p>
        <ul>{this.state.items.map(this.renderItem)}</ul>
      </div>
    );
  },

  renderItem(item, index) {
    return <li key={index}>{item}</li>;
  }
});

module.exports = Home;
