import React from 'react';
import PropTypes from 'prop-types';

const NextLevelButton = (props) => {
  const { btnNextClassList } = props;
  const { nextLevelHandler } = props;
  return (
    <button className={btnNextClassList.join(' ')} type="button" onClick={nextLevelHandler}>
      Next Level
    </button>
  );
};

NextLevelButton.propTypes = {
  btnNextClassList: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextLevelHandler: PropTypes.func.isRequired,
};

export default NextLevelButton;