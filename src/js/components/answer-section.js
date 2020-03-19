/* eslint-disable react/prop-types */
import React from 'react';
import Answer from './answer';
import BirdInfo from './bird-info';
import NextLevelButton from './next-level-button';
// import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const AnswerSection = (props) => {
  const { level, nextLevelHandler } = props;
  return (
    // eslint-disable-next-line react/self-closing-comp
    <div className="row mb2">
      <Answer
        level={level}
      />
      <BirdInfo />
      <NextLevelButton
        nextLevelHandler={nextLevelHandler}
      />
    </div>
  );
};

export default AnswerSection;