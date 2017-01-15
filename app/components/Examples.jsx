import React from 'react';
import { Link } from 'react-router';

const Examples = ( props ) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li>
          <Link to='/?location=Las Vegas'>
            Las Vegas, NV
          </Link>
        </li>
        <li>
          <Link to='/?location=Chiang Mai'>Chiang Mai, Thailand</Link>
        </li>
      </ul>
    </div>
  );
};

module.exports = Examples;
