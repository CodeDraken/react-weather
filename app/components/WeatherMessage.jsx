import React from 'react';

const WeatherMessage = ( props ) => {
  return (
    <p className="text-center">The temperature in {props.location} is {props.temp}°F
    </p>
  );
}

module.exports = WeatherMessage;
