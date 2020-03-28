/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Answer from './answer';
import BirdInfo from './bird-info';
import NextLevelButton from './next-level-button';

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

AnswerSection.propTypes = {
  birdClassList: PropTypes.arrayOf(PropTypes.string).isRequired,
  birdHandler: PropTypes.func.isRequired,
  btnNextClassList: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickedBird: PropTypes.objectOf(PropTypes.string),
  level: PropTypes.number.isRequired,
  nextLevelHandler: PropTypes.func.isRequired,
};

AnswerSection.defaultProps = {
  clickedBird: null,
};

export default AnswerSection;