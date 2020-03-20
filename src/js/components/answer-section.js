/* eslint-disable react/prop-types */
import React from 'react';
import Answer from './answer';
import BirdInfo from './bird-info';
import NextLevelButton from './next-level-button';
// import PropTypes from 'prop-types';

const AnswerSection = (props) => {
  const {
 birdHandler, birdClasses, btnNextClasses, level, nextLevelHandler,
} = props;
  return (
    <div className="row mb2">
      <Answer
        birdHandler={birdHandler}
        birdClasses={birdClasses}
        level={level}
      />
      <BirdInfo />
      <NextLevelButton
        btnNextClasses={btnNextClasses}
        nextLevelHandler={nextLevelHandler}
      />
    </div>
  );
};

export default AnswerSection;