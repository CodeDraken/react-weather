// Modules
import React, { Component } from 'react';

// Componnents
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      search: '',
      isLoading: false
    }
  }

  handleSearch = ( search ) => {

    this.setState( {
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp( search ).then(( data ) => {
      this.setState( {
        location: data.name,
        temp: data.main.temp,
        isLoading: false
      });

    }, ( err ) => {
      this.setState( {
        isLoading: false,
        errorMessage: err.message
      });
    });
  }

  render() {
    var { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return <p className="text-center">Fetching weather...</p>
      } else if ( temp && location ) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError() {
      if ( typeof errorMessage === 'string' ) {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }

}

module.exports = Weather;
