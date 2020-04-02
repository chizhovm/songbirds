import React from 'react';
import PropTypes from 'prop-types';

const GameOver = (props) => {
  const { score, newGameHandler } = props;
   return (
     <div className="jumbotron">
       <h1 className="display-3 text-center">
         Поздравляем!
       </h1>
       <p className="lead text-center">
         Вы прошли викторину и набрали
         {' '}
         { score }
         {' '}
         из 30 возможных баллов
       </p>
       <hr className="my-4" />
       <button type="button" className="btn btn-next btn-game-over" onClick={newGameHandler}>
         Попробовать еще раз!
       </button>
     </div>
   );
};

GameOver.propTypes = {
  newGameHandler: PropTypes.func,
  score: PropTypes.number,
};

GameOver.defaultProps = {
  newGameHandler: null,
  score: 0,
};

export default GameOver;