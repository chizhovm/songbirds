import React from 'react';
import Answer from './answer';
import BirdInfo from './bird-info';
import NextLevelButton from './next-level-button';
// import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const AnswerSection = (props) => {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <div className="row mb2">
      <Answer />
      <BirdInfo />
      <NextLevelButton />
    </div>
  );
};

export default AnswerSection;