/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
// import PropTypes from 'prop-types';

const RandomBird = () => {
  return (
    <div className="random-bird jumbotron rounded">
      <img className="bird-image" src="https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg" alt="Синица" />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Синица</h3>
          </li>
          <li className="list-group-item">
            <div className="audio-player ">
              <audio src="https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3" controls />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomBird;