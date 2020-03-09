import React, { Component } from 'react';
import Header from './components/header';
import GameOver from './components/game-over';
import levels from '../data/data';
import '../css/index.scss';

export default class App extends Component {
  constructor() {
    super();
    this.DEFAULT_VALUE = 0;
    this.DEFAULT_LEVELS = levels;
    this.state = {
      levels: this.DEFAULT_LEVELS,
      value: this.DEFAULT_VALUE,
    };
    this.adder = 1;
    this.levelsHandler = this.levelsHandler.bind(this);
    this.newGameHandler = this.newGameHandler.bind(this);
    this.render = this.render.bind(this);
  }

  levelsHandler(name) {
    let { value } = this.state;
    value += this.adder;
    const { levels } = this.state;
    levels.concat();
    levels.map((lev) => {
      if (lev.marked) lev.marked = false;
      if (lev.name === name) lev.marked = !lev.marked;
      return lev;
    });
    this.setState({ levels, value });
  }

  newGameHandler() {
    const { levels } = this.state;
    levels.concat();
    levels.map((lev, index) => {
      if (lev.marked) lev.marked = false;
      if (index === this.DEFAULT_VALUE) lev.marked = true;
      return lev;
    });
    const value = this.DEFAULT_VALUE;
    this.setState({ levels, value });
    const gameOver = document.querySelector('.game-over');
    gameOver.style.display = 'none';
    this.render();
  }

  render() {
    const { value } = this.state;
    const { levels } = this.state;
    return (
      <>
        <Header
          value={value}
          levels={levels}
          levelsHandler={this.levelsHandler}
        />
        <GameOver
          value={value}
          newGameHandler={this.newGameHandler}
        />
      </>
    );
  }
}