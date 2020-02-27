import React from 'react';

const PageItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { level, index } = props;
  let classes = 'page-item';
  if (!index) classes += 'active';
  return (
    <li className={classes}>
      <a className="page-link" href="/#">
        {level}
        {' '}
      </a>
    </li>
  );
};

export default PageItem;