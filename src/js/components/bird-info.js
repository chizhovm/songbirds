/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

const BirdInfo = (props) => {
  const { clickedBird } = props;
  const BirdDescription = () => {
    if (!clickedBird) {
      return (
        <p className="instruction" style={{ display: 'block' }}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
      );
    }
    return (
      <>
        <div className="card-body" style={{ display: 'flex' }}>
          <img
            className="bird-image"
            src={clickedBird.picture}
            alt={clickedBird.bird}
          />
          <ul className="list-group">
            <li>
              <h4>{clickedBird.bird}</h4>
            </li>
            <li>
              <span>{clickedBird.latin}</span>
            </li>
            <li>
              <div className="bird-info-audio-player">
                <audio src={clickedBird.sound} controls />
              </div>
            </li>
          </ul>
        </div>
        <span className="bird-description" style={{ display: 'flex' }}>
          {clickedBird.description}
        </span>
      </>
    );
  };

  return (
    <div className="col-md-6">
      <div className="bird-details">
        <BirdDescription />
      </div>
    </div>
  );
};

BirdInfo.propTypes = {
  clickedBird: PropTypes.shape({
    bird: PropTypes.string,
    birdClasslist: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    latin: PropTypes.string,
    picture: PropTypes.string,
    sound: PropTypes.string,
  }),
};

BirdInfo.defaultProps = {
  clickedBird: null,
};

export default BirdInfo;