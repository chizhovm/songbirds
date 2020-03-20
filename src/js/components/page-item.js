import React from 'react';
import PropTypes from 'prop-types';

const PageItem = (props) => {
  const { level } = props;
  const classes = ['page-item'];
  if (level.marked) classes.push('active');
  return (
    <li className={classes.join(' ')}>
      <a className="page-link" href="/#">
        {level.name}
        {' '}
      </a>
    </li>
  );
};

PageItem.propTypes = {
  level: PropTypes.instanceOf(Object),
};

PageItem.defaultProps = {
  level: null,
};

export default PageItem;