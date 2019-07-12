import React, {useReducer} from 'react'
import reducer  from './reducer'
import './g2048.css'

const tiles = [
    '#EEE4DA','#EDE0C8', '#F2B179', '#F59563',
    '#E07157','#F5613C', '#D5BA66', '#EDCC62',
]

const Tile = ({value, type, x, y}) => {
    return (
    <div className='tile'
        style={{top: `${25*y}%`, left: `${25*x}%`,
            backgroundColor: tiles[Math.log2(value)]}
        }
    >
        <div className='tileContents'>
            {value}
        </div>
    </div>)
}

const init = () => ({
    hiScore:0,
    score:0,
    tiles:  [{
        id: -1,
        x: Math.floor(Math.random()*4),
        y: Math.floor(Math.random()*4),
        value: Math.random()>.5?4:2
    }]
})
const G2048 = () => {
    const [{ hiScore, score, tiles}, dispatch] = useReducer(reducer, undefined, init )

      const clickHandler = (e) => {
          dispatch(e.target.innerText)
          setTimeout(()=>dispatch('duplicates'), 500)
      }

    const gameOver = 0 > tiles.reduce( (acc,e) => acc + e.zombie ? 0:1, 0 )

    return <>
    <div id='score-container'>
        score <div id='score'>{score}</div>
        best <div id='hi-score'>{hiScore}</div>
    </div>
    <button onClick={() => dispatch('newGame')}>new Game</button>
        {['left', 'right', 'up', 'down'].map( direction =>
            <button key={direction} onClick={clickHandler}>
                {direction}
            </button>
        )}
        <div className='game'>
            {tiles.map(tile => <Tile key={tile.id} {...tile}/>)}
        </div>
        {gameOver}
    </>
}

export default G2048;
