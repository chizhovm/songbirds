/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const Answer = (props) => {

  const { birdHandler, level } = props;
  const item = level.data.map((element, index) => {
  return (
    <li className={element.birdClasses.join(' ')} key={element.bird} onClick={() => birdHandler(level, element, index)}>
      <span className="li-btn" />
      {element.bird}
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