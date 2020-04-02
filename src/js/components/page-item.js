import React from 'react';
import PropTypes from 'prop-types';

const PageItem = (props) => {
  const { level } = props;
  const classList = ['page-item'];
  if (level.marked) classList.push('active');
  return (
    <li className={classList.join(' ')}>
      {level.name}
      {' '}
    </li>
  );
};

PageItem.propTypes = {
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
  }),
};

PageItem.defaultProps = {
  level: null,
};

export default PageItem;