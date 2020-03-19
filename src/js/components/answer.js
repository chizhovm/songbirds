/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Answer = (props) => {
  const { level } = props;
  const item = level.data.map((element) => {
  return (
    <li className="list-group-item" key={element.bird}>
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