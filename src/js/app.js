import React, { Component } from 'react';
import Header from './components/header';
import GameOver from './components/game-over';
import levels from '../data/data';
import RandomBird from './components/random-bird';
import '../css/index.scss';

export default class App extends Component {
  constructor() {
    super();
    this.DEFAULT_VALUE = 0;
    this.DEFAULT_LEVELS = levels;
    this.FINISH = 5;
    this.state = {
      gameOver: false,
      levels: this.DEFAULT_LEVELS,
      value: this.DEFAULT_VALUE,
    };
    this.adder = 1;
    this.levelsHandler = this.levelsHandler.bind(this);
    this.newGameHandler = this.newGameHandler.bind(this);
  }

  levelsHandler(name) {
    let { value } = this.state;
    value += this.adder;
    const { levels } = this.state;
    levels.concat();
    levels.map((level) => {
      if (level.marked) level.marked = false;
      if (level.name === name) level.marked = !level.marked;
      return level;
    });
    if (value === this.FINISH) {
      const gameOver = true;
      this.setState({ gameOver, levels, value });
    }
    this.setState({ levels, value });
  }

  newGameHandler() {
    const { levels } = this.state;
    levels.concat();
    levels.map((level, index) => {
      if (level.marked) level.marked = false;
      if (index === this.DEFAULT_VALUE) level.marked = true;
      return level;
    });
    const value = this.DEFAULT_VALUE;
    const gameOver = false;
    this.setState({ gameOver, levels, value });
  }

  render() {
    const { value } = this.state;
    const { levels } = this.state;
    const { gameOver } = this.state;

    if (gameOver) {
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
    return (
      <>
        <Header
          value={value}
          levels={levels}
          levelsHandler={this.levelsHandler}
        />
        <RandomBird />
      </>
    );
  }
}