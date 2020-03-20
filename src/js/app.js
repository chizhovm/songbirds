/* eslint-disable id-length */
import React, { Component } from 'react';
import _ from 'lodash';
import AnswerSection from './components/answer-section';
import Header from './components/header';
import GameOver from './components/game-over';
import DEFAULT_LEVELS from '../data/data';
import RandomBird from './components/random-bird';
import '../css/index.scss';

export default class App extends Component {
  // eslint-disable-next-line max-statements
  constructor() {
    super();
    this.DEFAULT_VALUE = 0;
    // this.DEFAULT_LEVELS = _.cloneDeep(levels);
    this.FINISH = 5;
    this.DEFAULT_btnNextClasses = 'btn';
    this.state = {
      btnNextClasses: [this.DEFAULT_btnNextClasses],
      currentLevel: this.DEFAULT_VALUE,
      gameOver: false,
      levelFinished: false,
      levels: _.cloneDeep(DEFAULT_LEVELS),
      value: this.DEFAULT_VALUE,
    };
    this.adder = 1;
    this.birdHandler = this.birdHandler.bind(this);
    this.newGameHandler = this.newGameHandler.bind(this);
    this.nextLevelHandler = this.nextLevelHandler.bind(this);
    this.getRandomBird();
  }

  getRandomBird() {
    this.randomBird = Math.floor(Math.random() * (this.FINISH + this.adder));
  }

  // eslint-disable-next-line max-statements
  birdHandler(level, element, index) {
    const { btnNextClasses, levels } = this.state;
    let { levelFinished } = this.state;
    const idx = levels.indexOf(level);
    if (this.randomBird === index) {
      levels[idx].data[index].birdClasses.push('success');
      btnNextClasses.push('btn-next');
      levelFinished = true;
    } else {
      if (!levelFinished && (levels[idx].data[index].birdClasses.join(' ') === 'list-group-item')) {
        levels[idx].count -= this.adder;
      }
      levels[idx].data[index].birdClasses.push('error');
    }
    this.setState({ btnNextClasses, levelFinished, levels });
  }

  newGameHandler() {
    const levels = _.cloneDeep(DEFAULT_LEVELS);
    const value = this.DEFAULT_VALUE;
    const gameOver = false;
    const currentLevel = this.DEFAULT_VALUE;
    this.setState({
      currentLevel, gameOver, levels, value,
    });
  }

  // eslint-disable-next-line max-statements
  nextLevelHandler() {
    const { levels } = this.state;
  let { levelFinished } = this.state;
    if (levelFinished) {
      levelFinished = false;
      this.getRandomBird();
      let {
        btnNextClasses, currentLevel, gameOver, value,
      } = this.state;
      value += levels[currentLevel].count;
      if (currentLevel === this.FINISH) {
        gameOver = true;
      } else {
        currentLevel += this.adder;
      }
      btnNextClasses = [this.DEFAULT_btnNextClasses];
      this.setState({
        btnNextClasses, currentLevel, gameOver, levelFinished, value,
      });
    }
  }

  render() {

    const {
      birdClasses, btnNextClasses, currentLevel, gameOver, levels, value,
    } = this.state;

    if (gameOver) {
      return (
        <>
          <Header
            value={value}
            levels={levels}
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
          btnNextClasses={btnNextClasses}
          level={levels[currentLevel]}
          nextLevelHandler={this.nextLevelHandler}
          birdHandler={this.birdHandler}
        />
      </>
    );
  }
}