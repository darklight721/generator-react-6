import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Browserify',
        'Babel'<% if (includeBootstrap) { %>,
        'Bootstrap'<% } if (includeModernizr) { %>,
        'Modernizr'<% } if (includeJest) { %>,
        'Jest'<% } %>
      ]
    };
  }

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

  renderItem(item, index) {
    return <li key={index}>{item}</li>;
  }
}
