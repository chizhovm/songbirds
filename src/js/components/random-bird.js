/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import DefaultBird from '../../images/random_bird.jpg';
// import PropTypes from 'prop-types';

const RandomBird = (props) => {
  const {
    currentLevel, levels, levelFinished, randomBird,
  } = props;
  const { data } = levels[currentLevel];
  const { sound } = data[randomBird];

  const bird = levelFinished ? data[randomBird].bird : '******';
  const picture = levelFinished ? data[randomBird].picture : DefaultBird;

  return (
    <div className="random-bird jumbotron rounded">
      <img className="bird-image" src={picture} alt={bird} />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{bird}</h3>
          </li>
          <li className="list-group-item">
            <div className="audio-player ">
              <audio src={sound} controls />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomBird;