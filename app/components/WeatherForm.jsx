import React, { Component } from 'react';

class WeatherForm extends Component {
  constructor( props ) {
    super( props );
  }
  onFormSubmit = ( e ) => {
    e.preventDefault();
    var location = this.refs.location.value;

    if ( location.length > 0 ) {
      this.refs.location.value = '';
      this.props.onSearch( location );
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter city name" ref="location" />
          <button className="button hollow expanded">Get Weather</button>
        </form>
      </div>
    );
  }
}

module.exports = WeatherForm;
