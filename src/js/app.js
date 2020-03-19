import React, { Component } from 'react';
import AnswerSection from './components/answer-section';
import Header from './components/header';
import GameOver from './components/game-over';
import levels from '../data/data';
import RandomBird from './components/random-bird';
import '../css/index.scss';

export default class App extends Component {
  // eslint-disable-next-line max-statements
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
    this.birdHandler = this.birdHandler.bind(this);
    // this.getRandomBird = this.getRandomBird.bind(this);
    this.levelsHandler = this.levelsHandler.bind(this);
    this.newGameHandler = this.newGameHandler.bind(this);
    this.nextLevelHandler = this.nextLevelHandler.bind(this);
    console.log(this.getRandomBird());
  }

  getRandomBird() {
    this.randomBird = Math.floor(Math.random() * (this.FINISH + this.adder));
  }

  birdHandler(level, element, index) {
    // eslint-disable-next-line max-len
    // console.log('randomBird=', this.randomBird, 'level=', level, 'element=', element, 'index=', index);
    console.log(this.randomBird);
    const { levels } = this.state;
    const idx = levels.indexOf(level);
    // console.log('level index = ', idx, levels[idx].data[index].birdClasses);
    if (this.randomBird === index) levels[idx].data[index].birdClasses.push('success');
    else levels[idx].data[index].birdClasses.push('error');
    this.setState({ levels });
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
      const levels = this.DEFAULT_LEVELS;
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
    this.getRandomBird();
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
    const { birdClasses } = this.state;

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
          birdClasses={birdClasses}
          level={levels[currentLevel]}
          nextLevelHandler={this.nextLevelHandler}
          birdHandler={this.birdHandler}
        />
      </>
    );
  }
}