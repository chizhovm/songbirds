/* eslint-disable id-length */
import React, { Component } from 'react';
import _ from 'lodash';
import AnswerSection from './components/answer-section';
import Header from './components/header';
import GameOver from './components/game-over';
import DEFAULT_LEVELS from '../data/data';
import RandomBird from './components/random-bird';
import '../css/index.scss';

const DEFAULT_VALUE = 0;
const DefaultBtnNextClasses = 'btn';
const FINISH = 5;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      btnNextClasses: [DefaultBtnNextClasses],
      clickedBird: null,
      currentLevel: DEFAULT_VALUE,
      gameOver: false,
      levelFinished: false,
      levels: _.cloneDeep(DEFAULT_LEVELS),
      // randomBird: this.getRandomBird(),
      value: DEFAULT_VALUE,
    };
    this.adder = 1;
    this.birdHandler = this.birdHandler.bind(this);
    this.newGameHandler = this.newGameHandler.bind(this);
    this.nextLevelHandler = this.nextLevelHandler.bind(this);
    this.randomBird = this.getRandomBird();
  }

  getRandomBird() {
    return Math.floor(Math.random() * (FINISH + this.adder));
  }

  // eslint-disable-next-line max-statements
  birdHandler(level, element, index) {
    const { btnNextClasses, levels } = this.state;
    let { clickedBird, levelFinished } = this.state;
    const idx = levels.indexOf(level);
    clickedBird = levels[idx].data[index];
    if (this.randomBird === index) {
      clickedBird.birdClasses.push('success');
      btnNextClasses.push('btn-next');
      levelFinished = true;
    } else {
      if (!levelFinished && (clickedBird.birdClasses.join(' ') === 'list-group-item')) {
        levels[idx].count -= this.adder;
      }
      clickedBird.birdClasses.push('error');
    }
    this.setState({
      btnNextClasses, clickedBird, levelFinished, levels,
    });
  }

  newGameHandler() {
    const levels = _.cloneDeep(DEFAULT_LEVELS);
    const value = DEFAULT_VALUE;
    const gameOver = false;
    const currentLevel = DEFAULT_VALUE;
    this.setState({
      currentLevel, gameOver, levels, value,
    });
  }

  // eslint-disable-next-line max-statements
  nextLevelHandler() {
    const { levels } = this.state;
    let { clickedBird, levelFinished } = this.state;

    if (levelFinished) {
      levelFinished = false;

      let {
        btnNextClasses, currentLevel, gameOver, value,
      } = this.state;

      value += levels[currentLevel].count;
      levels[currentLevel].marked = false;

      if (currentLevel === FINISH) {
        gameOver = true;
      } else {
        currentLevel += this.adder;
        levels[currentLevel].marked = true;
      }

      btnNextClasses = [DefaultBtnNextClasses];
      clickedBird = null;
      this.randomBird = this.getRandomBird();

      this.setState({
        btnNextClasses, clickedBird, currentLevel, gameOver, levelFinished, value,
      });
    }
  }

  render() {

    const {
      birdClasses, btnNextClasses, clickedBird, currentLevel,
      gameOver, levels, levelFinished, value,
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
        <RandomBird
          currentLevel={currentLevel}
          levels={levels}
          levelFinished={levelFinished}
          randomBird={this.randomBird}
        />
        <AnswerSection
          birdClasses={birdClasses}
          btnNextClasses={btnNextClasses}
          clickedBird={clickedBird}
          level={levels[currentLevel]}
          nextLevelHandler={this.nextLevelHandler}
          birdHandler={this.birdHandler}
        />
      </>
    );
  }
}