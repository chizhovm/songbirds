/* eslint-disable max-lines-per-function */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
// import PropTypes from 'prop-types';

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
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{clickedBird.bird}</h4>
            </li>
            <li className="list-group-item">
              <span>{clickedBird.latin}</span>
            </li>
            <li className="list-group-item">
              <div className="audio-player">
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
      <div className="bird-details card">
        <BirdDescription />
      </div>
    </div>
  );
};

export default BirdInfo;