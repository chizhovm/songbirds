/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PageItem from './page-item';
import levels from '../../data/data';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      levels,
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    const { levels } = this.state;

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
          {levels.map((level, index) => {
          return (<PageItem level={level} key={level} index={index} />);
          })}
        </ul>
      </div>
    );
  }
}

export default Header;