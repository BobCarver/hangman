import React from 'react'
import HangMan from './hangman'
import Clack from './clack'
import Calculator from './calculator'
import G2048 from './g2048-2'
import Match from './match'

const projects = new Map([
  ['Hangman', <HangMan />],
    ['Clack', <Clack />],
    ['Calculator', <Calculator />],
    ['2048', <G2048 />],
//    ['Puzzle', <Puzzle />],
    ['Match', <Match />]
])
export default projects;