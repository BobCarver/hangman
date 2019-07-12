import React, {useReducer} from 'react'
import reducer  from './reducer'
import image from './tang.jpg'
import './puzzle.css'
import randomize from '../randomize'

const Tile = ({clipRect, indx}) => {
    const
        x = indx % 4,
        y = ((indx - x)/4)
    return (
    <img className='t0' src={image} alt='' height='50'
        style={{top: `${25*y}%`, left: `${25*x}%`,
    clip: clipRect}}
    />)
}

const init = randomize( new Array(16).keys()).map((i,indx)=> {
    const
        x = (indx % 4),
        y = ((indx - x)/4)
    return {indx: i, clipRect: `rect(${25*x}%,${25*y}%,${25*x+25}%,${25*y+25}%)`}
})
console.log(init)

const clickHandler = (e) => {

    const x,y =
    first = amx(avail, 0)
    last = min()

}
const Puzzle = () => {
    const [{ tiles}, dispatch] = useReducer(reducer, {empty:0, tiles:init} )

      const clickHandler = (e) => {
          dispatch(e.target.innerText)
      }

    return (
//        <Tile clipRect='foo' indx='1' />
        <div className='game'>
            {tiles.map((tile,indx) => <Tile key={indx} {...tile}/>)}
        </div>
    )

}

export default Puzzle;
