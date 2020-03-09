import React from 'react';
import PropTypes from 'prop-types';

const PageItem = (props) => {
  const { level, levelsHandler } = props;
  const classes = ['page-item'];
  if (level.marked) classes.push('active');
  return (
    <li className={classes.join(' ')}>
      <a className="page-link" href="/#" onClick={levelsHandler}>
        {level.name}
        {' '}
      </a>
    </li>
  );
};

PageItem.propTypes = {
  level: PropTypes.instanceOf(Object),
  levelsHandler: PropTypes.func,
};

PageItem.defaultProps = {
  level: null,
  levelsHandler: null,
};

export default PageItem;