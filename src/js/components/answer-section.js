/* eslint-disable react/prop-types */
import React from 'react';
import Answer from './answer';
import BirdInfo from './bird-info';
import NextLevelButton from './next-level-button';
// import PropTypes from 'prop-types';

const AnswerSection = (props) => {
  const {
 birdHandler, birdClassList, btnNextClassList, clickedBird, level, nextLevelHandler,
} = props;
  return (
    <div className="row mb2">
      <Answer
        birdHandler={birdHandler}
        birdClassList={birdClassList}
        level={level}
      />
      <BirdInfo
        clickedBird={clickedBird}
      />
      <NextLevelButton
        btnNextClassList={btnNextClassList}
        nextLevelHandler={nextLevelHandler}
      />
    </div>
  );
};

export default AnswerSection;