import React, {useReducer} from 'react';
import Score from './score'
import './hangman.css'
const letters = [..."abcdefghijklmnopqrstuvwxyz"]

const reducer = (state, action) => {
  if(action === 'new-game')
    return {word:'test', guessed: ''}
  else if(letters.includes(action))
    return {...state, guessed: [...state.guessed, action ]}
  else return state
}

const Game = ({word, guessed, newGuess, newGame}) => {

    const wrong = [...guessed].filter(ch => !word.includes(ch)).length
    const partial = [...word].map(c => guessed.includes(c) ? c : '_').join('')
    const gameOver = wrong >= 9 || partial === word

    return (
      <div className="Hangman">
      <Score  wrong={wrong} gameOver={gameOver}/>
      <div className='partial'>{partial}</div>
      <div className='wrap'>
        {letters.map( ch =>
          <button key={ch}
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

  const xxx = () => {
    const [{word,guessed}, dispatch] = useReducer(reducer, {word:'test', guessed: ''})
    return <Game word={word} guessed={guessed}
      newGame={ () => dispatch('new-game')}
      newGuess={ (ch) => dispatch(ch)}
     />
  }

  export default xxx;