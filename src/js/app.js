import React, { Component } from 'react';
import AnswerSection from './components/answer-section';
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
      currentLevel: 0,
      gameOver: false,
      levels: this.DEFAULT_LEVELS,
      value: this.DEFAULT_VALUE,
    };
    this.adder = 1;
    this.levelsHandler = this.levelsHandler.bind(this);
    this.newGameHandler = this.newGameHandler.bind(this);
    this.nextLevelHandler = this.nextLevelHandler.bind(this);
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
    const value = 0;
    const gameOver = false;
    const currentLevel = 0;
    this.setState({
      currentLevel, gameOver, levels, value,
    });
  }

  nextLevelHandler() {
    let { currentLevel, gameOver } = this.state;
    if (currentLevel === this.FINISH) {
      gameOver = true;
      currentLevel = this.DEFAULT_VALUE;
    } else currentLevel += this.adder;
    this.setState({ currentLevel, gameOver });
  }

  render() {
    const { value } = this.state;
    const { levels } = this.state;
    const { gameOver } = this.state;
    const { currentLevel } = this.state;
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
        <AnswerSection
          level={levels[currentLevel]}
          nextLevelHandler={this.nextLevelHandler}
        />
      </>
    );
  }
}