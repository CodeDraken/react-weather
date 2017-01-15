import React from 'react';

const About = ( props ) => {
  return (
    <div>
      <h3 className="text-center">About</h3>
      <p>
        This is a simple one page application built using React & NodeJS. It fetches data from a weather API
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">Facebook ReactJS</a>
        </li>

        <li>
          <a href="https://openweathermap.org/">Open Weather Map API</a>
        </li>

        <li>
          <a href="https://nodejs.org/en/">NodeJS</a>
        </li>

      </ul>
    </div>
  );
};

module.exports = About;
