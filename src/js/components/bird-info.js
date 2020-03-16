/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
// import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const BirdInfo = (props) => {
  return (
    <div className="col-md-6">
      <div className="bird-details card">
        <p className="instruction" style={{ display: 'none' }}>
          <span>
            Послушайте плеер.
          </span>
          <span>
            Выберите птицу из списка
          </span>
        </p>
        <div className="card-body" style={{ display: 'flex' }}>
          <img className="bird-image" src="https://live.staticflickr.com//65535//49347123322_291c86b016.jpg" alt="Грач" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Грач</h4>
            </li>
            <li className="list-group-item">
              <span>Corvus frugilegus</span>
            </li>
            <li className="list-group-item">
              <div className="audio-player">
                <audio src="https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3" controls />
              </div>
            </li>
          </ul>
        </div>
        <span className="bird-description" style={{ display: 'flex' }}>
          Грачи очень умные и сообразительные птицы.
          {' '}
          С помощью клюва они создают и используют простейшие орудия.
          {' '}
          У грачей развит рефлекс на звуки трактора.
          {' '}
          Услышав «тарахтение», они летят на звук –
          {' '}
          трактор пашет землю, значит, в этом месте много корма.
        </span>
      </div>
    </div>
  );
};

export default BirdInfo;