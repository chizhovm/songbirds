/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

const NextLevelButton = (props) => {
  const { btnNextClassList } = props;
  const { nextLevelHandler } = props;
  return (
    <button className={btnNextClassList.join(' ')} type="button" onClick={nextLevelHandler}>
      Next Level
    </button>
  );
};

export default NextLevelButton;