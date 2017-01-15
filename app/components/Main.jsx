import React, { Component } from 'react';
import Nav from 'Nav';

const Main = ( props ) => {
  return (
    <div>
      <Nav />

      <div className="row">
        <div className="columns small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>

    </div>
  )
}

module.exports = Main;
