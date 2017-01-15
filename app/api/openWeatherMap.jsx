import React from 'react';
import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2985b75d7d35be539e3ee8a34207a167&units=imperial';


export default {
  getTemp: function ( location ) {
    let encodedLocation = encodeURIComponent( location );
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

    return axios.get( requestUrl ).then(( res ) => {
      if ( res.data.cod && res.data.message ) {

        throw new Error( 'Unable to fetch weather for that location.' );
      } else {
        return res.data;
      }
    }, ( res ) => {
      throw new Error( 'Unable to fetch weather for that location.' );
    });

  }
}
