/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import DefaultBird from '../../images/random_bird.jpg';

const RandomBird = (props) => {

  const {
    currentLevel, levels, levelFinished, randomBird,
  } = props;
  const { data } = levels[currentLevel];
  const { sound } = data[randomBird];

  const bird = levelFinished ? data[randomBird].bird : RandomBird.defaultProps.levelFinished;
  const picture = levelFinished ? data[randomBird].picture : DefaultBird;

  return (
    <div className="random-bird jumbotron rounded">
      <img className="bird-image" src={picture} alt={bird || RandomBird.defaultProps.randomBird} />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{bird || RandomBird.defaultProps.randomBird}</h3>
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

RandomBird.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  levelFinished: PropTypes.bool,
  levels: PropTypes.arrayOf(PropTypes.object).isRequired,
  randomBird: PropTypes.number,
};

RandomBird.defaultProps = {
  levelFinished: false,
  randomBird: '******',
};

export default RandomBird;