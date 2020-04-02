import React from 'react';
import PropTypes from 'prop-types';

const Answer = (props) => {

  const { birdHandler, level } = props;
  const item = level.data.map((element, index) => {
  return (
    <button key={element.bird} className={element.birdClassList.join(' ')} onClick={() => birdHandler(level, index)} type="button">
      <span className="li-btn" />
      {element.bird}
    </button>
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

Answer.propTypes = {
  birdHandler: PropTypes.func.isRequired,
  level: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        bird: PropTypes.string,
        birdClasslist: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        latin: PropTypes.string,
        picture: PropTypes.string,
        sound: PropTypes.string,
      }),
    ),
    marked: PropTypes.bool,
    name: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
};

export default Answer;