const setLevelScore = (level, score) => {
  level.score = score;
  return level;
};

const setBirdClassList = (level, birdClassList) => {
  level.data.map((element) => {
    element.birdClassList = [birdClassList];
    return element;
  });
  return level;
};

const setFirstLevelMarker = (level, index) => {
  level.marked = false;
  if (!index) level.marked = true;
  return level;
};

const getRandomBird = (birdCount) => Math.floor(Math.random() * birdCount);

export {
 setLevelScore, setBirdClassList, setFirstLevelMarker, getRandomBird,
};