import React from 'react';
import PropTypes from 'prop-types';
import PageItem from './page-item';

const Header = (props) => {

  const { score, levels } = props;

  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <div className="logo" />
        <h5>
          Score:
          {' '}
          <span className="score">{score}</span>
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
  score: PropTypes.number,
};

Header.defaultProps = {
  score: 0,
};

export default Header;