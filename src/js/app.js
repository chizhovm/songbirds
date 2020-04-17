/* eslint-disable id-length */
import React, { Component } from 'react';
import _ from 'lodash';
import AnswerSection from './components/answer-section';
import Header from './components/header';
import GameOver from './components/game-over';
import RandomBird from './components/random-bird';
import DEFAULT_LEVELS from './data/data';
import {
  setLevelScore, setBirdClassList, setFirstLevelMarker, getRandomBird,
} from './utilites';
import '../css/index.scss';

const ADDER = 1;
const BIRD_COUNT = 6;
const DEFAULT_SCORE = 0;
const DEFAULT_BTN_NEXT_CLASSLIST = 'btn';
const DEFAULT_BIRD_CLASSLIST = 'list-group-item bird-item';
const START_LEVEL = 0;
const FINISH_LEVEL = 5;
const LEVEL_SCORE = 5;

DEFAULT_LEVELS.map((level, index) => {
  setLevelScore(level, LEVEL_SCORE);
  setFirstLevelMarker(level, index);
  setBirdClassList(level, DEFAULT_BIRD_CLASSLIST);
  return level;
});

const DEFAULT_STATE = {
  btnNextClassList: [DEFAULT_BTN_NEXT_CLASSLIST],
  clickedBird: null,
  currentLevel: START_LEVEL,
  gameOver: false,
  levelFinished: false,
  levels: _.cloneDeep(DEFAULT_LEVELS),
  randomBird: getRandomBird(BIRD_COUNT),
  score: DEFAULT_SCORE,
};

export default class App extends Component {
  constructor() {
    super();
    this.state = _.cloneDeep(DEFAULT_STATE);
    this.birdHandler = this.birdHandler.bind(this);
    this.newGameHandler = this.newGameHandler.bind(this);
    this.nextLevelHandler = this.nextLevelHandler.bind(this);
  }

  // eslint-disable-next-line max-statements
  birdHandler(level, index) {
    const { btnNextClassList, randomBird } = this.state;
    let { clickedBird, levelFinished } = this.state;
    clickedBird = level.data[index];
    if (randomBird === index) {
      clickedBird.birdClassList.push('success');
      btnNextClassList.push('btn-next');
      levelFinished = true;
    } else {
      if (!levelFinished && (clickedBird.birdClassList.join(' ') === DEFAULT_BIRD_CLASSLIST)) {
        level.score -= ADDER;
      }
      clickedBird.birdClassList.push('error');
    }
    this.setState({
      btnNextClassList, clickedBird, levelFinished,
    });
  }

  newGameHandler() {
    const state = _.cloneDeep(DEFAULT_STATE);
    this.setState(state);
  }

  // eslint-disable-next-line max-statements
  nextLevelHandler() {
    const { levels } = this.state;
    let {
      btnNextClassList, clickedBird, currentLevel, gameOver, levelFinished, randomBird, score,
     } = this.state;

    if (levelFinished) {
      levelFinished = false;
      score += levels[currentLevel].score;
      levels[currentLevel].marked = false;

      if (currentLevel === FINISH_LEVEL) {
        gameOver = true;
      } else {
        currentLevel += ADDER;
        levels[currentLevel].marked = true;
      }

      btnNextClassList = [DEFAULT_BTN_NEXT_CLASSLIST];
      clickedBird = null;
      randomBird = getRandomBird(BIRD_COUNT);

      this.setState({
        btnNextClassList, clickedBird, currentLevel, gameOver, levelFinished, randomBird, score,
      });
    }
  }

  render() {

    const {
      birdClassList, btnNextClassList, clickedBird, currentLevel,
      gameOver, levels, levelFinished, randomBird, score,
    } = this.state;

    if (gameOver) {
      return (
        <>
          <Header
            score={score}
            levels={levels}
          />
          <GameOver
            score={score}
            newGameHandler={this.newGameHandler}
          />
        </>
      );
    }
    return (
      <>
        <Header
          score={score}
          levels={levels}
        />
        <RandomBird
          currentLevel={currentLevel}
          levels={levels}
          levelFinished={levelFinished}
          randomBird={randomBird}
        />
        <AnswerSection
          birdClassList={birdClassList}
          btnNextClassList={btnNextClassList}
          clickedBird={clickedBird}
          level={levels[currentLevel]}
          nextLevelHandler={this.nextLevelHandler}
          birdHandler={this.birdHandler}
        />
      </>
    );
  }
}