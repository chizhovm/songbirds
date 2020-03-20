import React from 'react';
import PropTypes from 'prop-types';
import PageItem from './page-item';

const Header = (props) => {

  const { value, levels } = props;

  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <div className="logo" />
        <h5>
          Score:
          {' '}
          <span className="score">{value}</span>
        </h5>
      </div>
      <ul className="pagination">
        {levels.map((level) => {
          return (
            <PageItem
              level={level}
              key={level.name}
            />
            );
          })}
      </ul>
    </div>
  );
};

Header.propTypes = {
  levels: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number,
};

Header.defaultProps = {
  value: 0,
};

export default Header;