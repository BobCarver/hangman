import React, { useState } from 'react';
import Game from './Game';

const newWord = () => 'test'
const App = () => {
  const [guessed, setGuesses] = useState([])
  const [word, setWord] = useState(newWord())
  return (
      <Game
        word={word}
        guessed={guessed}
        newGuess={(ch) => setGuesses(guessed+[ch])}
        newGame={() => {setGuesses([]); setWord(newWord())}}/>
    );
  }
  export default App;