/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const Answer = (props) => {

  const { birdHandler, level } = props;
  const item = level.data.map((element, index) => {
  return (
    <li key={element.bird}>
      <button className={element.birdClassList.join(' ')} onClick={() => birdHandler(level, index)} type="button">
        <span className="li-btn" />
        {element.bird}
      </button>
    </li>
  );
  });

  return (
    <div className="col-md-6">
      <ul className="item-list list-group">
        {item}
      </ul>
    </div>
  );
};

export default Answer;