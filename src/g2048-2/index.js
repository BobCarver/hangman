import React, {useReducer} from 'react'
import reducer  from './reducer'

import './g2048.css'
const Tile = ({key, value, x, y}) => (
    <div
        key={key}
        className={`tile t${value}`}
        style={{top: `${25*y}%`, left: `${25*x}%`}}
    >
        <div className='tileContents'>
            {value}
        </div>
    </div>
)

const init = () => reducer({score:0, tiles:[]},'left')
const G2048 = () => {
    const [{ score, tiles}, dispatch] = useReducer(reducer, undefined, init )

    return <>
        score {score}
        {['left', 'right', 'up', 'down'].map( direction =>
            <button key={direction} onClick={() => dispatch(direction)}>
                {direction}
            </button>
        )}
        <div className='game'>
            {tiles.map(tile => <Tile {...tile}/>)}
        </div>

        gameOver
    </>
}

export default G2048;
