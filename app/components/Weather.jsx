// Modules
import React, { Component } from 'react';

// Componnents
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      search: '',
      isLoading: false
    }
  }

  handleSearch = ( search ) => {
    this.setState( { isLoading: true });
    openWeatherMap.getTemp( search ).then(( data ) => {
      this.setState( {
        location: data.name,
        temp: data.main.temp,
        isLoading: false
      });

    }, ( err ) => {
      this.setState( {
        isLoading: false
      });
      alert( 'failed to fetch weather', err );
    });
  }

  render() {
    var { isLoading, temp, location } = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return <p>Fetching weather...</p>
      } else if ( temp && location ) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }

}

module.exports = Weather;
