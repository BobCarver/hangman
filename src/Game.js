import React from 'react';
const letters = [..."abcdefghijklmnopqrstuvwxyz"]

const Game = ({word, guessed, newGuess, newGame}) => {

    const wrong = [...guessed].filter(ch => !word.includes(ch)).length
    const partial = [...word].map(c => guessed.includes(c) ? c : '_').join('')
    const gameOver = wrong === 5 || partial === word

    return (
      <div className="App">
      remaining {wrong}
      {partial}
        {letters.map( ch =>
          <button
            disabled={guessed.includes(ch) || gameOver }
            onClick={() => newGuess(ch)}>{ch}
          </button>
        )}
        {gameOver && ("You" + (partial === word ? "Won!":"Lost"))}
        {gameOver && <button onClick={newGame}>New Game</button>}
      </div>
    );
  }
  export default Game;