import React from 'react';
const letters = [..."abcdefghijklmnopqrstuvwxyz"]

const Game = ({word, guessed, newGuess, newGame}) => {

    const wrong = [...guessed].filter(ch => !word.includes(ch)).length
    const partial = [...word].map(c => guessed.includes(c) ? c : '_').join('')
    const gameOver = wrong === 5 || partial === word
    const style = {width: '10%', backgroundColor: 'lightBlue'}
    return (
      <div className="App">
      remaining {wrong}
      {partial}
      <div>
        {letters.map( ch =>
          <button style={style}
            disabled={guessed.includes(ch) || gameOver }
            onClick={() => newGuess(ch)}>{ch}
          </button>
        )}
        </div>
        {gameOver && ("You" + (partial === word ? "Won!":"Lost"))}
        {gameOver && <button onClick={newGame}>New Game</button>}
      </div>
    );
  }
  export default Game;