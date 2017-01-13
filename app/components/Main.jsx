import React, { Component } from 'react';
import Nav from 'Nav';

class Main extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div>
        <Nav />
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
